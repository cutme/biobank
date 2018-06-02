import CountUp from 'countup.js';

const top = document.getElementsByClassName('js-top')[0];
      let scroll_pos = window.pageYOffset || window.scrollY;
      let removebg, hidenav;


// Logo positioning

if (window.innerWidth <= 768) {
    top.style.paddingLeft = '20px';
} else {
    top.style.paddingLeft = '60px';
}



// Pace preloader

Pace.start();
Pace.on('done', function() {   

    (function (arr) {
      arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
          return;
        }
        Object.defineProperty(item, 'remove', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function remove() {
            this.parentNode.removeChild(this);
          }
        });
      });
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); 


    document.getElementById('cover').remove();
    
    setTimeout(function() {
        document.body.removeAttribute('style');
        
        document.getElementsByClassName('pace')[0].remove();
        document.getElementsByClassName('js-hamburger')[0].removeAttribute('style');
        document.getElementsByClassName('js-nav')[0].removeAttribute('style');
        document.getElementsByClassName('js-bbmri')[0].removeAttribute('style');
        document.getElementsByClassName('js-top')[0].removeAttribute('style');
        
        if (document.getElementsByClassName('c-hero')[0]) {
            document.getElementsByClassName('c-hero')[0].classList.add('is-anim');
        }        
    }, 500);
});



// Get scroll position

(function() {
    window.addEventListener('scroll', function() {
        scroll_pos = window.pageYOffset || window.scrollY;
    });
}).call(this);



// Full height

(function() {
	const fullHeight = document.getElementsByClassName('js-fullHeight'),
          action = function() {
              let windowHeight = window.innerHeight + 'px';

              for (let i = 0; i < fullHeight.length; i++) {
                  fullHeight[i].style.minHeight = windowHeight;
              }

          };

	if (fullHeight.length > 0) {
	    action();
    	window.addEventListener( 'resize', action );
    }

}).call(this);


const scrollTo = function (target, speed, offset) {

	TweenLite.to(window, speed, {
		scrollTo: {
			y: target + offset,
			autoKill: false
		},
		ease: Power1.easeOut
	});
};



// GoToTarget

(function() {

    'use strict';

	const speed_calculate = function (target) {
    	let base_speed  = 50,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};

	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    let src = that.getAttribute('href'),
	        window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

	    const obj = document.getElementById( src.slice(1, src.length) );

	    if (obj) {
	        let offset = that.getAttribute('data-offset');

            if (!offset) {
                offset = 0;
            }
            
            document.body.removeAttribute('style');
	    
	        let target = window_pos + obj.getBoundingClientRect().top - offset;
	        scrollTo(target, speed_calculate(target), -50);
	    }
        
        if (window.e) {
            window.e.returnValue = false;
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};

	const btn = document.getElementsByClassName('js-goto');


    if (btn.length>0) {
    	for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', clickAction);
        }
    }
    
//    if (target) {
        //alert(target);
  //  }

}).call(this);


// isMobile

(function() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		document.getElementsByTagName('html')[0].className += ' mobile';
	} else {
	    document.getElementsByTagName('html')[0].className += ' desktop';
	}
}).call(this);


// nav

(function() {
    
    const hamburger = document.getElementsByClassName('js-hamburger')[0];
    
    if (hamburger) {
     
        const nav = document.getElementsByClassName('js-nav')[0];
     
        const action = function(e) {
            
            e.currentTarget.classList.toggle('is-active');
            document.body.classList.toggle('no-overflow');
            nav.classList.toggle('is-visible');
            
        }
        
        hamburger.addEventListener('click', action);
        
        window.addEventListener('resize', function() {
           
           if (window.innerWidth > 1440) {
                if (hamburger.classList.contains('is-active')) {
                    hamburger.classList.remove('is-active');
                    document.body.classList.remove('no-overflow');
                    nav.classList.remove('is-visible');
                }
           }
            
        });
    }
    
}).call(this);


// Show on scroll

const showonscroll = function() {
    
    const el = document.getElementsByClassName('anim'),
          count = document.getElementsByClassName('js-count');
    
    const isInView = function(el) {
		let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
		
		if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow) {
			return true;
		}
	};

	for (let i = 0; i < el.length; i++) {
	    
		if (isInView(el[i])) {
			el[i].className += ' anim--loaded';
		}
	}

	const countit = function(o, n) {
    	var demo = new CountUp(o, 0, n, 0, 5, { useEasing: true });
		    
		if (!demo.error) {
            demo.start();
        } else {
            console.error(demo.error);
        }
	}

	for (let j = 0; j < count.length; j++) {
	    
		if (isInView(count[j])) {
		    countit(count[j], count[j].getAttribute('data-count'));
		}
	}

	function init() {

        // Show in viewport
        for (let i = 0; i < el.length; i++) {
            let bottomOfObject = el[i].getBoundingClientRect().top + 50,
                bottomOfWindow = window.innerHeight;

            if ( bottomOfWindow > bottomOfObject + 50) {
                el[i].classList.add('anim--loaded');
			}
		}


        for (let k = 0; k < count.length; k++) {
            let bottomOfObjectC = count[k].getBoundingClientRect().top + 50,
                bottomOfWindowC = window.innerHeight;

            if ( bottomOfWindowC > bottomOfObjectC + 50) {
                if ( !count[k].classList.contains('anim--loaded') ) {
                    countit(count[k], count[k].getAttribute('data-count'));
                    count[k].classList.add('anim--loaded');
                }
			}
		}
	}

	window.addEventListener('scroll', init);
	
};




Pace.on('done', function() {   
    
    setTimeout(function() {
        
        showonscroll();
        
    }, 500);
});
