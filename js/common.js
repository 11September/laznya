$(document).ready(function() {
    $(".mobile-btn").click(function () {
        $(".menu-list").toggleClass('hider');
    });

    $(".menu-list").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //alert(id);

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".menu_links").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //alert(id);

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});


$(function() {
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

jQuery(document).ready(function(){
    jQuery(function(){          
        jQuery('#fluid_dg_wrap_4').fluid_dg({
        	height: 'auto', 
        	loader: 'bar', 
        	pagination: false, 
        	thumbnails: true, 
        	hover: false, 
        	opacityOnGrid: false, 
        	imagePath: ''});
    });
})

jQuery(document).ready(function(){
    jQuery(function(){          
        jQuery('#fluid_dg_wrap_3').fluid_dg({
        	height: 'auto', 
        	loader: 'bar', 
        	pagination: false, 
        	thumbnails: true, 
        	hover: false, 
        	opacityOnGrid: false, 
        	imagePath: ''});
    });
})

jQuery(document).ready(function(){
    jQuery(function(){          
        jQuery('#fluid_dg_wrap_2').fluid_dg({
        	height: 'auto', 
        	loader: 'bar', 
        	pagination: false, 
        	thumbnails: true, 
        	hover: false, 
        	opacityOnGrid: false, 
        	imagePath: ''});
    });  
})

jQuery(document).ready(function(){
    jQuery(function(){          
        jQuery('#main_slider').fluid_dg({
            height: '900px', 
            loader: 'bar', 
            pagination: false, 
            thumbnails: false, 
            hover: false, 
            opacityOnGrid: false, 
            imagePath: ''});
    });  
})