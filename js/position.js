$("span").each(function() {
				var currentId = $(this).attr('id');

				var p = $(this);
				var offset = p.offset();
				var imageLocX = offset.left;
				var imageLocY = offset.top;

				//var w = $('div#'+currentId);
				//var width = w.width();
				//var halfwidth = (width/4)*1;
				//var imageLocXmin = imageLocX - halfwidth;


				$('div#'+currentId).css({
				left : imageLocX,
				top : imageLocY,
				});

			});


