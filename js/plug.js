


$('#navbtn').click(function(){
    $('#mySidenav').addClass('over_mob');
    $('.over_click').addClass('on');
    $('body').addClass('scroll_mob');
});
$('.closebtn').click(function(){
    $('#mySidenav').removeClass('over_mob');
    $('.over_click').removeClass('on');
    $('body').removeClass('scroll_mob');
});



 
$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
        nav: true,
        navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
	});


$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 50);
        }
    }

    $(".num").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $(".num").each(function () {
            count($(this));
        });
    };

    $(window).scroll(function () {
        startCount();
    });

    startCount();
});



    
$('.pro_slider').owlCarousel({
		items:4,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:25,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			991:{
				items:3
			},
			1199:{
				items:4
			}
		}
	}); 

$('.brands_slider').owlCarousel({
		items:6,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:25,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:6
			}
		}
	}); 









 