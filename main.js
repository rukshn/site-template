$(document).ready(function() {
var map = L.mapbox.map('map', 'zaper.h615kf9j').setView([6.920 , 79.885],15);
var media_box = '<div id="infpopup"><p>Some information about the location</p></div>';
var marker = new L.marker([6.9193674,79.8702213]).addTo(map).bindPopup(media_box).openPopup();

$("#content").animate({'opacity':'1'},1000);
$("#infoarea1").animate({'opacity':'1'},1300);

   /* Every time the window is scrolled ... */
$(window).scroll( function(){
   
        /* Check the location of each desired element */
       $('.container').each( function(i){
           
            var bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_object = $(this).position().top + $(this).outerHeight()/2;
            var top_of_window = $(window).scrollTop();

           /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
               
                $(this).animate({'opacity':'1'},500);
                    
           }
           
        
       }); 
    
});
    
    
});
