var h_gl=$(window).height();
var w_hd=1920,h_hd=1080,h;
var animating=0;

function resize()
{
	var w=$(window).width();
	h=(w*h_hd)/w_hd;
	var fs=(w*6)/w_hd+'em';
	var magna=(w*4)/w_hd+'em';
	var t_ar,t_sec;

	/* scroll-wrap adjustment */
	$("#scroll_wrap").css({'margin-top':7*h});
	$(".wrap_inner>span").css({'top':(h-180)/2});	

	/* scroll-wrap-inner adjustment */
	$(".circle").css({'margin-top':(h-250)/2});

	/* keypress sync */
	window.addEventListener("keydown", function(e) {
    // space and arrow keys
	    var index=[38, 40].indexOf(e.keyCode);
	    if(index > -1) 
	    {
	    	wheel(e,index+1);
	    }
	}, false);

	/* fix height adjustment */
	$(".fix").css({'height':h});

	/* section height adjustment */
	$('section').each(function()
	{
		$(this).css({'height':h});
	});	

	/* window height adjustment */
	$('.window').css({'height':(h/2)});

	/* window span top margin adjustment */
	$('.window span').css({'margin-top':(h/2-85)/2});

	/* font adjustments */
	$('body').css({'font-size':fs});

	/* sec wrap adjustment */
	$('.sec_wrap').each(function()
	{
		$(this).css({'margin-top':(h-$(this).height())/2});
	});	

}

/* scroll assist */
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event,index) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    if(index)
    {
    	delta=(index==2)?-1:1;
    }

    var scrollTop=$(window).scrollTop();

	if(scrollTop>=7*h&&scrollTop<=13*h)
    {
	    if (event.preventDefault) event.preventDefault();
	    event.returnValue = false;

	    if(!animating)
	    	handle(delta,scrollTop);
    }

    if(scrollTop>=0&&scrollTop<=5*h/2)
    {
	    $('#bg1').css({'display':'block'});
	    $('#bg2').css({'display':'none'});
    }
    else if(scrollTop>=5*h/2&&scrollTop<=5*h)
    {
	    $('#bg2').css({'display':'block'});
	    $('#bg1').css({'display':'none'});
    }
	else if($(window).scrollTop()>=5*h)
    {
	    $('#bg2').css({'display':'none'});
    }
}

function handle(delta,scrollTop) {
	animating=1;
	var st=(delta<0)?scrollTop/h+1:scrollTop/h-1;
	    $('html, body').stop().animate({
	        scrollTop:st*h
	    },1500,function(){animating=0;});		
}

$(document).ready(function()
{
	$('#prev_sponsors_icon').click(function()
	{
	    $('html, body').stop().animate({
	        scrollTop:14*h
	    },1500,function(){animating=0;});
	});
	$('#contacts_icon').click(function()
	{
	    $('html, body').stop().animate({
	        scrollTop:15*h
	    },1500,function(){animating=0;});	
	});	
	$('.lg').click(function()
	{
	    $('html, body').stop().animate({
	        scrollTop:0
	    },1500,function(){animating=0;});
	});
	resize();
	//day and night
	var d= new Date();
	if((d.getHours()>6)&&(d.getHours()<18))
		$('#footer').css({'background-position':'100% 0'});
	else
		$('#footer').css({'background-position':'0 0'});	
});

$(document).ready(function()
{
	resize();
});

$(window).resize(function()
{
	resize();
});