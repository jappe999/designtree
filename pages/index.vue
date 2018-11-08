<template>
  <div class="flex text-black">
    <div class="max-h-screen w-full flex flex-col" :class="scrollbars ? 'overflow-auto' : 'overflow-hidden'">
      <div class="w-full p-8 border-b">
        <h1>Design Tree</h1>

        <label class="mt-4 flex items-center">
          <input
            v-model="collapsed"
            type="checkbox"
            class="mr-1"
          >
          Collapsed
        </label>

        <label class="mt-4 flex items-center">
          <input
            v-model="scrollbars"
            type="checkbox"
            class="mr-1"
          >
          Show scrollbars
        </label>
      </div>

      <div class="dragscroll" :class="scrollbars ? 'overflow-auto' : 'overflow-hidden'">
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
    </div>

    <div class="h-screen min-w-64 w-full max-w-sm flex flex-col justify-between shadow">
      <node
        :selected="selected"
        @escape="escapeNode"
        @push="pushNode"
        @delete="deleteNode"
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
      scrollbars: false,
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
        if (obj.children[path]) {
          obj.children[path] = {
            ...obj.children[path],
            ...value
          }
          return true
        }
        return false
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
      })
      .catch(error => console.error(error))
    },

    deleteNode (node) {
      axios.delete(`/api/tree/${node.id}`)
      .then(() => {
        // this.updateNode(this.tree, node.id.split('/').slice(1), node)
      })
      .catch(error => console.error(error))
    },
  }
}
</script>