$(function(){

var header = document.getElementById('header');
var headroom = new Headroom(header);
headroom.init();

// Menu adaptable
var ancho = $(window).width(),
	enlaces = $('#enlaces'),
	btnMenu = $('#btn-menu'),
	icono = $('#btn-menu .icono');

if(ancho< 1000){
	enlaces.hide();
	icono.addClass('fa-list-ul');
}

btnMenu.on('click', function(e){
	enlaces.slideToggle();
	icono.toggleClass('fa-list-ul');
	icono.toggleClass('fa-bars');
});

$(window).on('resize', function(){
	if($(this).width() > 1000){
		enlaces.show();
		icono.addClass('fa-bars');
		icono.removeClass('fa-list-ul');
	} else{
		enlaces.hide();
		icono.addClass('fa-list-ul');
		icono.removeClass('fa-bars');
	}
});

});

$(document).ready(function(){
	var show = 0;
	$('.show').on('click', function(){
		if(show == 0){
			$('.content-menu').removeClass("content-menu3");
			$('.content-menu').addClass("content-menu2");
			show = 1;
		}
		else{
			$('.content-menu').removeClass("content-menu2");
			$('.content-menu').addClass("content-menu3");
			show = 0;
		}
	})
})

