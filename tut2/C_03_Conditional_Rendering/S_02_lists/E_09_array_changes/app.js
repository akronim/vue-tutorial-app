/* 
Vue wraps observers around the following array mutation methods:
push
pop
shift
unshift
splice
sort
reverse


This means that as long as you are changing your array through these methods, Vue will be able 
to detect the changes. 

If you are using a method that does not mutate, or change, the original array, Vue will 
not detect that. The methods that do not change the original array are filter, concat, and slice. 
To get Vue to observe these changes to the array, replace the original array with the results.
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
    // Replacing the Original Array with Results of the Array Method That Returns a New Array
    teenFilter: function () {
      this.books = this.books.filter((book) => {
        return (
          book.genres.findIndex((genre) => {
            return genre === "teen";
          }) >= 0
        );
      });
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
