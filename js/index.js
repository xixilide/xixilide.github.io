$(function(){

			//划过nav的效果，使用了插件
			$("#navlist li").hover(function(){
				$(this).find("img").animate({"width":170,"height":170},600,"easeOutBack");
            $(this).find(".navbox").show();
            $(this).find("h3").animate({"top":160},600,"easeOutBack");
            $(this).find(".navmenu").show().animate({"left":160,"top":100},700,"easeOutBack");


			},function(){
				$(this).find("img").animate({"width":0,"height":0},300,"easeInBack");
		        $(this).find(".navbox").hide();
		        $(this).find(".navmenu").hide();
		        $(this).find("h3").animate({"top":40},600,"easeOutBack");


			});

			//鼠标划过文字效果
			$(".main_t_left p").hover(function(){
				$(this).css("color","white");
			},function(){
				$(this).css("color","#ccc");

			})


			//广告图左右轮播

			$(".btn_right").click(function(){
				

			 	$("#list").animate({marginLeft:-960},400,function(){
			 	var first=$("#list li:first");
			 	first.remove();
				$("#list").append(first);
		     	$("#list").css("marginLeft","-960px");
			 	});
		 });
			
			//按钮图片的切换	
			$(".btn_right").hover(function(){
				
				
			 	$(".btn_right").find("img").attr("src","images/right_on.gif");
			},function(){
$(".btn_right").find("img").attr("src","images/right.gif");
			});

         $(".btn_left").click(function(){
         	
			 
			 	

			 	var last=$("#list li:last");
				last.remove();
			 	$("#list").prepend(last);
			 	("#list").css("marginLeft","-1780px");
			 $("#list").animate({marginLeft:0},400);
		 });
//存在问题是：没实现自动滚动,没用插件
			//按钮图片的切换
			$(".btn_left").hover(function(){
				
				
			 	$(".btn_left").find("img").attr("src","images/left_on.gif");
			},function(){
$(".btn_left").find("img").attr("src","images/left.gif");
			});

			 
			
		//鼠标划过大图变小图
	$(".hover_box").hover(function(){
		$(".hover_box img").animate({"width":150},{"height":150},200); 
		$(".hover_box h5").show();
		$(".hover_box h6").show();
	},function(){
		$(".hover_box img").animate({"width":300},{"height":300},200); 
		});
		$(".hover_box h5").hide();
		$(".hover_box h6").hide();
		});

