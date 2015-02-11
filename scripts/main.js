var AppRouter = Backbone.Router.extend({
    routes: {
      "": "index",
      // "results/:id": "results",
      // "brewery/:id": "brewery"
    },

  // Using index as a walkthrough...
  index: function(){
    // _.template() returns a function. So here, template is a function,
    // not the actual HTML for your page.
    var template = _.template( $('#brewery-search-template').text() );
    // Since template is a function, we have to invoke it. It expects 
    // an object of key/value pairs that match the keys in your "beestings"
    // inside your text/template. Your text/template has a single placeholder
    // right now: "index". It looks like you wanted this be a search term, 
    // but that will take some more work. For now I'll just put a dummy
    // value in.
    var objectForTemplate = { 'index':'myVariable' };
    // Now, we call the template function we created with _.template() 
    // earlier, and we give it an object like it wants.  
    var renderedTemplate = template(objectForTemplate);
    // renderedTemplate should be populate now - let's append it. 
    $('.app-container').html(renderedTemplate);
  },

  // results: function(){
  //   var template = _.template( $('#brewery-list-template').text() );
  //   var renderedTemplate = template;
  //   $('.app-container').html(renderedTemplate);
  // },
  //
  // brewery: function(){
  //   var template = _.template( $('#brewery-info-template').text() );
  //   var renderedTemplate = template;
  //   $('.app-container').html(renderedTemplate);
  // }


});

$(document).ready(function(){
  var router = new AppRouter();
  Backbone.history.start();
});
