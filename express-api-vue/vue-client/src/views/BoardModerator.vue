<template>
  <div>
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
    <books></books>
  </div>
</template>

<script>
import Books from '@/components/Books.vue'
import TestService from '../services/test.service'

export default {
  name: 'Moderator',
  components: {
    Books
  },
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    TestService.getModeratorBoard().then(
      response => {
        this.content = response.data
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
      }
    )
  }
}
</script>
