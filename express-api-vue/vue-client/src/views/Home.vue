<template>
  <div>
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import TestService from '@/services/test.service'

export default {
  name: 'Home',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    TestService.getPublicContent().then(
      (response) => {
        this.content = response.data
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
      }
    )
  }
}
</script>
