<template>
  <div class="text-black">
    <h1 class="p-8">Design Tree</h1>

    <tree
      :data="tree"
      :collapsable="true"
      :horizontal="true"
      :render-content="renderContent"
      @expand="onExpand"
      @node-click="selectNode"
      @node-double-click="createChild"
      class="select-none"
    />

    <div class="h-screen min-w-64 w-full max-w-sm fixed pin-t pin-r flex flex-col justify-between shadow-md">
      <node
        :selected="selected"
        @escape="escapeNode"
        @push="pushNode"
      />

      <div class="py-6 px-3">
        <div>
          <b>Click</b> on a node to see it's details.
        </div>
        <div>
          <b>Double click</b> on a node to create a child.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import uuid from 'uuid/v4'
import Node from '~/components/Node'

const nodeTemplate = {
  id: '',
  title: '',
  author: '',
  quantity: '',
  type: '',
  deadline: '',
}

export default {
  data: () => {
    return {
      selected: { ...nodeTemplate },
      tree: { ...nodeTemplate },
    }
  },

  components: {
    Node,
  },

  mounted () {
    this.fetchData()
  },

  methods: {
    async fetchData () {
      const { data } = await axios.get('/api/tree')
      this.tree = {
        ...this.tree,
        ...data,
      }
      console.log(this.tree);
      
    },

    renderContent (h, data) {
      return data.title
    },
    
    onExpand (data) {
      if ('expand' in data) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
    
    collapse (list) {
      var _this = this
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false
        }
        child.children && _this.collapse(child.children)
      })
    },

    stripNode (node) {
      const strippedNode = {}

      Object.keys(nodeTemplate).forEach(key => {
        strippedNode[key] = node[key]
      })

      return strippedNode
    },
    
    selectNode (e, data) {
      if (data.id) {
        const node = this.stripNode(data)
        this.selected = {
          ...node,
          action: 'update',
        }
      } else {
        this.selected = { ...nodeTemplate }
      }
    },

    createChild (e, data) {
      let id = uuid()
      if (data.id) {
        id = `${data.id}/${id}`
      }

      this.selected = {
        ...nodeTemplate,
        id,
        action: 'create-child'
      }
    },

    escapeNode () {
      this.selected = nodeTemplate
    },
    
    updateNode (obj = {}, path, value) {
      if (path.length === 1) {
        obj.children[path] = {
          ...obj.children[path],
          ...value
        }
        return
      }
      return this.updateNode(obj.children[path[0]], path.slice(1), value)
    },

    pushNode (node) {
      if (!node.id) {
        node.id = uuid()
      }

      axios.post('/api/tree', node)
      .then(() => {
        this.updateNode(this.tree, node.id.split('/').slice(1), node)
        // this.escapeNode()
      })
      .catch(error => console.error(error))
    },
  }
}
</script>