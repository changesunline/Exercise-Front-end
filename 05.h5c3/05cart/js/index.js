$(function () {
	$('#container').fullpage({
			//options here
			sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
			autoScrolling:true,
			scrollHorizontally: true,
			verticalCentered:false,
			navigation:true,
			afterLoad:function (origin, destination, direction) {
				//每页动画都可以重来 
				$(".section").removeClass("now").eq(destination.index).addClass("now");
				$(".more").removeClass("leaved").addClass("now");
				// 动画不可以重来
				// $(".section").eq(destination.index).addClass("now");
			},
			onLeave:function (origin, destination, direction) {
				$(".more").removeClass("now").addClass("leaved");
				
				if (origin.index == 1 && direction =='down') {
					// $(".section").eq(origin.index).addClass("leaved");
					$(".section").removeClass("leaved").eq(origin.index).addClass("leaved");
				}
				if (origin.index == 2 && direction =='up') {
					$(".section").removeClass("leaved");
					// $(".section").removeClass("leaved").eq(origin.index).addClass("leaved");
				}
				if (origin.index == 2 && direction =='down') {
					// $(".section").eq(origin.index).addClass("leaved");
					$(".section").removeClass("leaved").eq(origin.index).addClass("leaved");
					$(".screen4").removeClass("show");
				}
				if (origin.index == 3 && direction =='down') {
					$(".screen5").removeClass("show");
				}
				if (origin.index == 3 && direction =='up') {
					$(".section").removeClass("leaved");
				}
				if (origin.index == 4 && direction =='down') {
					$(".screen6").addClass("play");
					$(".section").removeClass("leaved").eq(origin.index).addClass("leaved");
				}
				if (origin.index == 4 && direction =='up') {
					$(".screen4").removeClass("show");
				}
				if (origin.index == 5 && direction =='down') {
					console.log(1);
					$(".screen6").removeClass("play");
					// $(".screen7 .star img").each(function (i,e) {
					// 	$(this).delay(i*250).fadeIn();
					// });
					$(".screen7 .star img").each(function (i,e) {
						$(this).css("transition-delay",i*0.3+'s');
					});
				}
				if (origin.index == 5 && direction =='up') {
					$(".section").removeClass("leaved");
					$(".screen5").removeClass("show");
					$(".screen6").removeClass("play");
				}
				if (origin.index == 6 && direction =='up') {
					$(".screen6").addClass("play");
				}
				
			},
			afterRender:function () {
				$(".more").on("click",function () {
					$.fn.fullpage.moveSectionDown();
				});
				$(".screen4 .cart").on("transitionend",function () {
					$(".screen4").addClass("show");
				});
				// $(".screen5 .hand").on("animationend",function () {
				// 	$(".screen5").addClass("show");
				// });
				$(".screen5 .hand").on("transitionend",function () {
					$(".screen5").addClass("show");
				});
				$(".screen6 .box").on("animationend",function () {
					$(".screen6").addClass("show");
				});
				$(".screen8").on("mousemove",function (e) {
					$(this).find(".hand").css({
						"left":e.pageX-300+"px",
						"top":e.pageY+"px"
					});
				});
				$(".screen8 .again").on("click",function () {
					$.fn.fullpage.moveTo(1);
				});
			},
			scrollingSpeed:1000

			
		});

		//methods
		// $.fn.fullpage.setScrollingSpeed(1000);
		// $.fn.fullpage.setAllowScrolling(true);
});