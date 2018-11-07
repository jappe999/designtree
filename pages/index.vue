<template>
  <div class="flex text-black">
    <div class="max-h-screen w-full overflow-auto dragscroll">
      <h1 class="pt-8 px-8 pb-4">Design Tree</h1>

      <div class="px-8 pb-8">
        <label>
          <input type="checkbox" v-model="collapsed">
          Collapsed
        </label>
      </div>

      <tree
        :data="tree"
        :collapsable="collapsed"
        :horizontal="true"
        :render-content="renderContent"
        @expand="onExpand"
        @node-click="selectNode"
        @node-double-click="createChild"
        class="select-none cursor-move"
      />
    </div>

    <div class="h-screen min-w-64 w-full max-w-sm flex flex-col justify-between shadow-md">
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

if (process.browser) {
  require('dragscroll')
}

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
      collapsed: true,
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
    
    collapse (object) {      
      Object.keys(object).forEach(key => {
        const child = object[key]
        if (child.expand) {
          child.expand = false
        }
        child.children && this.collapse(child.children)
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