<template>
  <div class="book-container">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="form.title" name="title" class="form-control" />
      </div>

      <div class="form-group">
        <label for="author">Author</label>
        <input v-model="form.author" name="author" class="form-control" />
      </div>

      <div class="form-group">
        <label for="publishDate">Published Date</label>
        <input v-model="form.publishDate" type="date" name="publishDate" class="form-control" />
      </div>

      <div class="form-group">
        <label for="publisher">Publisher</label>
        <input v-model="form.publisher" name="publisher" class="form-control" />
      </div>

      <div class="form-group">
        <label for="numOfPages">Number Of Pages</label>
        <input v-model="form.numOfPages" type="number" name="numOfPages" class="form-control" />
      </div>

        <button class="btn btn-primary" type="button" @click="save">
          Save
        </button>
    </form>

    <table class="table table-sm table-bordered book-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Pages</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="loading"> Loading data... </template>

        <template v-else>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.publisher }}</td>
            <td>{{ book.numOfPages }}</td>
            <td>{{ book.publishDate }}</td>
            <td>
              <button class="btn btn-sm btn-primary mr-1" @click="editBook(book.id)">
                Edit
              </button>
              <button class="btn btn-sm btn-danger" @click="deleteBook(book.id)">
                Delete
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import authHeader from '../services/auth-header'

export default {
  name: 'books',
  data: function () {
    return {
      books: [],
      form: {
        id: '',
        title: '',
        author: '',
        publishDate: '',
        publisher: '',
        numOfPages: ''
      },
      formInput: '',
      formError: '',
      apiUrl: 'http://192.168.43.148:5555/api/v1/books',
      loading: false
    }
  },

  created () {
    this.getAll()
  },

  methods: {
    getAll: function () {
      this.loading = true
      axios
        .get(this.apiUrl, { headers: authHeader() })
        .then((response) => {
          this.loading = false
          this.books = response.data
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })

      // this.loading = true
      // const books = await axios.get(this.apiUrl)
      // this.posts = books
      // this.loading = false
    },
    save: function () {
      var that = this

      const config = {
        method: this.form.id ? 'PUT' : 'POST',
        url: this.apiUrl,
        data: this.form,
        headers: authHeader()
      }

      axios(config)
        .then(function (response) {
          Object.keys(that.form).forEach((k, i) => {
            that.form[k] = ''
          })

          that.getAll()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    editBook: function (id) {
      const book = this.books.filter((x) => x.id === id)
      this.form = book.pop()
    },

    deleteBook: function (id) {
      var that = this
      axios
        .delete(`${this.apiUrl}/${id}`, { headers: authHeader() })
        .then(function (response) {
          that.getAll()
        })
        .catch((err) => console.log(err.response))
    }
  }
}
</script>

<style scoped>
.book-container {
  display: grid;
}

@media screen and (min-width: 1000px) {
  .book-container {
    grid-template-columns: 25% auto;
    column-gap: 20px;
  }
  .book-table {
    align-self: start;
  }
}
</style>
