<template>
  <div>
    <button class="commit" @click="handleCommit">Commit</button>

    <button class="namespaced-commit" @click="handleNamespacedCommit">
      Namespaced Commit
    </button>

    <button class="dispatch" @click="handleDispatch">Dispatch</button>

    <button class="namespaced-dispatch" @click="handleNamespacedDispatch">
      Namespaced Dispatch
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentWithButtons',

  methods: {
    handleCommit () {
      this.$store.commit('testMutation', { msg: 'Test Commit' })
    },

    handleNamespacedCommit () {
      this.$store.commit('namespaced/very/deeply/testMutation', {
        msg: 'Test Namespaced Commit'
      })
    },

    handleDispatch () {
      this.$store.dispatch('testAction', { msg: 'Test Dispatch' })
    },

    handleNamespacedDispatch () {
      this.$store.dispatch('namespaced/very/deeply/testAction', {
        msg: 'Test Namespaced Dispatch'
      })
    }
  }
}
</script>
