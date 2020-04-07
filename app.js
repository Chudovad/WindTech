$(function() {


    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav__head");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });



    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });



    /* Reviews: https://kenwheeler.github.io/slick/ */
    // let slider = $("#reviewsSlider");

    // slider.slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     arrows: true,
    //     dots: true,
    //     accessibility: true
    // });

    $('#reviewsSlider').slick({
        arrows: true,
        accessibility: true,
        dots: true
    });


});


// time now

$(function(){     
    var d = new Date(),        
        h = d.getHours(),
        m = d.getMinutes();
    if(h < 10) h = '0' + h; 
    if(m < 10) m = '0' + m; 
    $('input[type="time"][value="now"]').each(function(){ 
      $(this).attr({'value': h + ':' + m});
    });
  });


// checkbox

var toggle = document.querySelector('.toggleButton input')
var animate = setInterval(() => {
    toggle.checked = !toggle.checked
}, 3000)

document.querySelector('body').addEventListener('click', () => {
  clearInterval(animate);
})


//modal content
var delay_popup = 150000000;
var msg_pop = document.getElementById('msg_pop');
if (screen.width > 1170) {
    setTimeout("document.getElementById('msg_pop').style.display='block';document.getElementById('msg_pop').className += 'fadeIn';", delay_popup);
}

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.msg_pop');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.msg_pop').fadeOut();
		
	}
});



