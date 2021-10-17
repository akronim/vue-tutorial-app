<template>
  <div>
    <div>Foo</div>
    <div class="routeName">
      {{ this.currentRoute }}
    </div>
        <div class="username">
      {{ this.currentRouteParams }}
    </div>
        <div class="query">
      {{ this.currentRouteQuery }}
    </div>
    <div class="path">
      {{ this.currentRoutePath }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooRoute',
  computed: {
    currentRoute () {
      return this.$route.name
    },
    currentRouteParams () {
      return this.$route.params.username
    },
    currentRouteQuery () {
      return this.$route.query.q
    },
    currentRoutePath () {
      return this.$router.currentRoute.path
    }
  },
  methods: {
    goToHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
