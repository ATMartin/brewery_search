var AppRouter = Backbone.Router.extend({
    routes: {
      "": "index",
      "results/:id": "results",
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

  // Let's walk through the second route
  results: function(id){
    // This route gets an "id" variable because it has an ":id" variable
    // in the routes declaration above. So I've added that to the function
    // declaration here. 
    // This looks good, but remember - _.template() returns a function.
    var template = _.template( $('#brewery-list-template').text() );
    // We need to call this template to make it usable. It also needs
    // an object with keys to fill your template with. I'm adding the
    // object, and I'm updating your template with one line so you can see
    // how that URL/route variable works.
    var objectForTemplate = { 'index' : 'someRandomVariable', 'urlReference' : id }
    // Now we call the template function on our new object to actually render
    // our template (filled in). 
    var renderedTemplate = template(objectForTemplate);
    // And we cross our fingers as we hit "refresh". 
    $('.app-container').html(renderedTemplate);
  },

  /**
   * You might see some really wonky rendering with the "results" route above. 
   * What's happening is that you're rendering both the index route AND the
   * results route, so both may show up on your page. Nothing major to worry about.
   * We'll go over soon how this is a good thing, as you may want to render
   * smaller bits across different parts of the same page. 
  **/
  
  // YOUR TURN! Fix this function like the first two and get it working.
  // Don't forget to reactivate your route directive up above!

  // brewery: function(){
  //   var template = _.template( $('#brewery-info-template').text() );
  //   var renderedTemplate = template;
  //   $('.app-container').html(renderedTemplate);
  //}

});

$(document).ready(function(){
  var router = new AppRouter();
  Backbone.history.start();
});
