var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function (initialBooks){
    this.collection = new app.Library (initalBooks);
    this.render();
  },

  // render library by rendering each book in collection
  render: function(){
    this.collection.each(function(book){
      this.renderBook(book)
    })
  },

  // individual book render by creating a BookView and
  // appending the el it renders to the library el
  renderBook: function(book){
    var bookView = new app.BookView({
      model: book
    });
    this.$el.append(bookView.render().el)
  }
})

