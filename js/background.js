for (var i = 0; i < 2; i++) {

			var things = ['blue', 'aqua', 'pink', 'BlueViolet', 'DarkMagenta', 'DeepPink', 'Gainsboro', 'GhostWhite', 'black' ];
			var styles = ['radial' , 'linear' ];
			var color1 = things[Math.floor(Math.random()*things.length)];
			var color2 = things[Math.floor(Math.random()*things.length)];
			var color3 = things[Math.floor(Math.random()*things.length)];
			var opacity1 = Math.floor(Math.random()*100);
			var opacity2 = Math.floor(Math.random()*100);
			var opacity3 = Math.floor(Math.random()*100);
			var style = styles[Math.floor(Math.random()*styles.length)];

			/*var css = '#block' + i + ' { background: -webkit-' + style + '-gradient(' + color1 +', ' + color2 +', ' + color3 +'); background: -moz-' + style + '-gradient(' + color1 +', ' + color2 +', ' + color3 +'); background: ' + style + '-gradient(' + color1 +', ' + color2 +', ' + color3 +'); }',*/

			var css = '#block' + i + ' { background: -webkit-' + style + '-gradient(' + color1 +' ' + opacity1+'%, ' + color2 +' ' + opacity2+'%, ' + color3 +' ' + opacity3+'%); background: -moz-' + style + '-gradient(' + color1 +' ' + opacity1+'%, ' + color2 +' ' + opacity2+'%, ' + color3 +' ' + opacity3+'%); background: ' + style + '-gradient(' + color1 +' ' + opacity1+'%, ' + color2 + ' ' + opacity2+'%, ' + color3 + ' ' + opacity3+'%); }',

    		head = document.head || document.getElementsByTagName('head')[0],
   			style = document.createElement('style');

			style.type = 'text/css';
			if (style.styleSheet){
  			style.styleSheet.cssText = css;
			} else {
  			style.appendChild(document.createTextNode(css));
			}

			head.appendChild(style);

			/*$("body"),

			$("#block").append('<div class="' + i + '"></div>'')*/
		}
