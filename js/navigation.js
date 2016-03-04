var click = new Audio('click.wav');


				var li = $('li');
					var liSelected;
					$(window).keydown(function(e){
					    if(e.which === 40){
					    	click.pause();
							click.currentTime = 0;
					    	click.play();

					        if(liSelected){
					            liSelected.removeClass('selected');
					            next = liSelected.next();
					            if(next.length > 0){
					                liSelected = next.addClass('selected');
					            }else{
					                liSelected = li.eq(0).addClass('selected');
					            }
					        }else{
					            liSelected = li.eq(0).addClass('selected');

					        }
					    }else if(e.which === 38){
					    	click.pause();
							click.currentTime = 0;
					    	click.play();
					        if(liSelected){
					            liSelected.removeClass('selected');
					            next = liSelected.prev();
					           	if(next.length > 0){
					                liSelected = next.addClass('selected');
					            }else{
					                liSelected = li.last().addClass('selected');

					            }
					        }else{
					            liSelected = li.last().addClass('selected');

					        }
					    }

					    var pageNum = $(".selected > a").attr("href");

						/*$(document).keyup(function(event){
		    				if(event.keyCode == 13){
		    					document.location.href = pageNum;
						    	}

						});*/

						$(document).keyup(function(event){
		    				if(event.keyCode == 13){
		    					document.location.href = pageNum;
						    	}

						});

						$(document).keyup(function(event){
		    				if(event.keyCode == 49){
		    					location.reload();
						    	}

						});

						$(document).keydown(function(event){
		    				if(event.keyCode == 66 ){
		    					window.history.back();
						    	}
						});

					

				});