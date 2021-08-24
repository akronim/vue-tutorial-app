/* 
When dealing with change and arrays, there are two cases that require special attention.
Vue cannot detect when an item is replaced in an array using the index of the item, 
and when the array is resized by assigning a new value to the length property. 
To get around these limitations, you can replace items in an array using Vue.set, 
or using the JavaScript splice method.
*/

var app = new Vue({
  el: "#app",
  data: {
    items: ["first", "two", "3"],
    books: [
      {
        title: "Entertaining Kids Book",
        price: 4.99,
        id: 0,
        genres: ["kids", "fiction"],
      },
      {
        title: "Teen Drama",
        price: 5.99,
        id: 1,
        genres: ["teen", "fiction"],
      },
      {
        title: "Boring Facts",
        price: 6.99,
        id: 2,
        genres: ["adult", "non-fiction"],
      },
      {
        title: "Overly Complex Story",
        price: 7.99,
        id: 3,
        genres: ["adult", "science fiction", "fiction"],
      },
      {
        title: "Facts for Teens",
        price: 3.99,
        id: 4,
        genres: ["teen", "non-fiction"],
      },
    ],
  },
  methods: {
    // To resize an array, you can use the JavaScript splice method
    resize: function () {
      // Vue can not detect
      this.books.length = 1;
      // Use splice to resize an array, Vue can detect
      this.books.splice(0);
    },
    set: function () {
      var indexToReplace = 0;
      var newBook = {
        title: "Newer Entertaining Kids Book",
        price: 4.99,
        id: 0,
        genres: ["kids", "fiction"],
      };
      // Using Vue.set to Replace an Item in an Array
      Vue.set(this.books, indexToReplace, newBook);
    },
    splice: function () {
      var indexToReplace = 0;
      var newBook = {
        title: "New Entertaining Kids Book",
        price: 4.99,
        id: 0,
        genres: ["kids", "fiction"],
      };
      // Using splice to Replace an Item in an Array
      this.books.splice(indexToReplace, 1, newBook);
    },
  },
  template: `
    <ul>
    <li v-for="book in books" :key="book.id">
      <p><strong>Id:</strong> {{ book.id }}<p>
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p><strong>Genres:</strong> 
        <span v-for="(genre, index) in book.genres">
        {{genre}}<span v-if="index < book.genres.length -1">, </span>
        </span>
      </p>
    </li>
    </ul>
    `,
});
