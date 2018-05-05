jQuery(document).ready(function($){

      $(".icon-menu").on("click", function(event){
        event.preventDefault();
        $(this).next().toggleClass("menu-visible");
      });

      $(".icon-cross").on("click", function(event){
        event.preventDefault();
        $("nav").toggleClass("menu-visible");
        
      });
      


      $(window).on("scroll",function(){
      var distanceFromTop = $(window).scrollTop();

            if(distanceFromTop > 50)
            {
              $(".home header").addClass("sticky");
            }
            else{
              $(".home header").removeClass("sticky");
            }
    });
    
    $(".menu-item-has-children a").attr("aria-haspopup","true");
    $(".menu-item-has-children a").attr("aria-expanded","false");
    $("li:not(.menu-item-has-children) a").removeAttr("aria-haspopup","true");
    $("li:not(.menu-item-has-children) a").removeAttr("aria-expanded","false");
    
    
          $("a[aria-haspopup='true']").on("click",function(event){
          
            event.preventDefault();
            

            var button = $(this);
            var menu = button.next();

            menu.toggleClass("expanded");
            

            if( button.attr("aria-expanded")=="false")
            {
              button.attr("aria-expanded","true");
            }
            else
            {
              button.attr("aria-expanded","false");
            }

            menu.find(".sub-menu").removeClass("expanded");


          });
});



