<template>
  <form @submit="pushNode">
    <h2 class="py-8 px-3">
      {{ titleText }}
    </h2>

    <label class="flex border-b">
      <div class="min-w-24 py-4 px-3">
        Title:
      </div>
      <input type="text" class="w-full py-4 px-3" v-model="node.title">
    </label>

    <label class="flex border-b">
      <div class="min-w-24 py-4 px-3">
        Author:
      </div>
      <input type="text" class="w-full py-4 px-3" v-model="node.author">
    </label>

    <label class="flex border-b">
      <div class="min-w-24 py-4 px-3">
        Quantity:
      </div>
      <input type="text" class="w-full py-4 px-3" v-model="node.quantity">
    </label>

    <label class="flex border-b">
      <div class="min-w-24 py-4 px-3">
        Type:
      </div>
      <input type="text" class="w-full py-4 px-3" v-model="node.type">
    </label>

    <label class="flex border-b">
      <div class="min-w-24 py-4 px-3">
        Deadline:
      </div>
      <input type="date" class="w-full py-4 px-3" v-model="node.deadline">
    </label>

    <div class="flex justify-end items-center py-4 px-3">
      <button
        @click.prevent="escape"
        type="submit"
        role="submit"
        class="ml-3 my-2 mr-4 py-px text-red border-b border-transparent hover:border-red"
      >
        Escape
      </button>

      <button
        @click.prevent="pushNode"
        type="submit"
        role="submit"
        class="ml-3 py-3 px-4 bg-green text-white"
      >
        {{ buttonText }}
      </button>
    </div>
  </form>
</template>

<script>
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
      node: { ...nodeTemplate },
    }
  },

  props: {
    selected: {
      type: Object,
      default: () => nodeTemplate
    },
  },

  computed: {
    titleText () {
      switch (this.node.action) {
        case 'update':
          return `Update ${this.node.title}`
          break
        case 'create-child':
          return 'Create a new child'
          break
        default:
          return 'Select a node'
          break
      }
    },

    buttonText () {
      return (this.node.action === 'update')
        ? 'Update'
        : 'Create'
    }
  },

  watch: {
    selected (selected) {
      this.node = selected
    },
  },

  methods: {
    escape () {
      this.node = nodeTemplate
      this.$emit('escape')
    },

    pushNode () {
      this.$emit('push', this.node)
    }
  }
}
</script>
