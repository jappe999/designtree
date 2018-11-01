let clicks = 0
let timer = null
let delay = 300

function click(e, data, context) {
  const clickHandler = context.listeners['node-click']
  const dblclickHandler = context.listeners['node-double-click']

  clicks++
  if (clicks === 1) {
    timer = setTimeout(function () {
      clicks = 0
      return (clickHandler && clickHandler(e, data))
    }, delay)
  } else {
    clearTimeout(timer)
    clicks = 0
    return (dblclickHandler && dblclickHandler(e, data))
  }
}

const isLeaf = (data, prop) => {
  return !(Object.keys(data[prop] || {}).length > 0)
}

export const renderNode = (h, data, context) => {
  const {
    props
  } = context
  const cls = ['org-tree-node']
  const childNodes = []
  const children = data[props.props.children]

  if (isLeaf(data, props.props.children)) {
    cls.push('is-leaf')
  } else if (props.collapsable && !data[props.props.expand]) {
    cls.push('collapsed')
  }

  childNodes.push(renderLabel(h, data, context))

  if (!props.collapsable || data[props.props.expand]) {
    childNodes.push(renderChildren(h, children, context))
  }

  return h('div', {
    domProps: {
      className: cls.join(' ')
    }
  }, childNodes)
}

export const renderBtn = (h, data, context) => {
  const {
    props
  } = context
  const expandHandler = context.listeners['expand']

  let cls = ['org-tree-node-btn']

  if (data[props.props.expand]) {
    cls.push('expanded')
  }

  return h('span', {
    domProps: {
      className: cls.join(' ')
    },
    on: {
      click: e => {
        e.stopPropagation()
        expandHandler && expandHandler(data)
      }
    }
  })
}

export const renderLabel = (h, data, context) => {
  const {
    props
  } = context
  const label = data[props.props.label]
  const renderContent = props.renderContent

  const childNodes = []
  if (typeof renderContent === 'function') {
    let vnode = renderContent(h, data)

    vnode && childNodes.push(vnode)
  } else {
    childNodes.push(label)
  }

  if (props.collapsable && !isLeaf(data, props.props.children)) {
    childNodes.push(renderBtn(h, data, context))
  }

  const cls = ['org-tree-node-label-inner']
  let {
    labelWidth,
    labelClassName
  } = props
  if (typeof labelWidth === 'number') {
    labelWidth += 'px'
  }
  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(data)
  }
  labelClassName && cls.push(labelClassName)

  return h('div', {
    domProps: {
      className: 'org-tree-node-label cursor-pointer'
    }
  }, [h('div', {
    domProps: {
      className: cls.join(' ')
    },
    style: {
      width: labelWidth
    },
    on: {
      click: e => click(e, data, context),
    }
  }, childNodes)])
}

export const renderChildren = (h, objectList, context) => {
  if (Object.keys(objectList).length) {
    const children = Object.keys(objectList).map(item => {
      return renderNode(h, objectList[item], context)
    })

    return h('div', {
      domProps: {
        className: 'org-tree-node-children'
      }
    }, children)
  }
  return ''
}

export const render = (h, context) => {
  const {
    props
  } = context
  return renderNode(h, props.data, context)
}

export default render
