$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });


  $(window).scroll(function() {
      if ($("#menu").offset().top > 150) {
          $("#menu").addClass("bg-dark");
      } else {
          $("#menu").removeClass("bg-dark");
      }
  });


  $('[data-toggle="tooltip"]').tooltip();
  

});


/*    
       $(window).scroll(function(){
         if ($(this).scrollTop() > 200) {
          $('"#menu").addClass("bg-dark");
         } else {
          $("#menu").removeClass("bg-dark");
         }
      });

*/