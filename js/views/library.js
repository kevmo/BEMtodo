var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function (initialBooks){
    this.collection = new app.Library (initialBooks);
    this.render();

    this.listenTo (this.collection, 'add', this.renderBook);
  },

  // individual book render by creating a BookView and
  // appending the el it renders to the library el
  renderBook: function(book){
    var bookView = new app.BookView({
      model: book
    });
    this.$el.append(bookView.render().el);
  },

  // render library by rendering each book in collection
  render: function(){
    var that = this;
    this.collection.each(function(book){
      console.log('hurr');
      console.dir(that);
      that.renderBook(book);
    });
  },

  events : {
    'click #add' : 'addBook'
  },

  addBook: function (e) {
    e.preventDefault();

    var formData = {};

    $('#addBook div').children('input').each (function (i, el){
      if ($(el).val() !== ''){
        formData[el.id] = $(el).val();
      }
    });

    this.collection.add( new app.Book(formData) );
  }

})

