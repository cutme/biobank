import Swiper from '../../node_modules/swiper/dist/js/swiper.js';
import swiper from '../sass/idangerous.swiper2.scss';


(function() {

    const newsprev = document.getElementById('newsprev');

    if (newsprev) {   
    
    
        const carousel_text = document.getElementById('newsprev_text'),
              carousel_photo = document.getElementById('newsprev_photos');
        
        const photos = new Swiper (carousel_photo, {
            on: {
                transitionStart: function() {
                    texts.slideTo(this.activeIndex);
                }
            }
        }); 

        const texts = new Swiper (carousel_text, {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            on: {
                transitionStart: function() {
                    photos.slideTo(this.activeIndex);
                }
            }
        }); 
    }

}).call(this);



(function() {

    const history = document.getElementById('history');

    if (history) {   
    
        const carousel_text = document.getElementById('history_text'),
              carousel_photo = document.getElementById('history_photo'),
              carousel_timeline = document.getElementById('history_timeline');
              
              
        const timeline = new Swiper (carousel_timeline, {
            slidesOffsetAfter: 750,
            slidesOffsetBefore: 150,
            slidesPerView: 'auto',
            slideToClickedSlide: true,
            spaceBetween: 6,
            centeredSlides: false,    
            on: {
                init: function() {
                    this.slideTo(1);  
                }
            }
        });
        
        const photo = new Swiper (carousel_photo, {
            on: {
                init: function() {
                    this.slideTo(1);  
                }
            }
        }); 

        const text = new Swiper (carousel_text, {
            on: {
                init: function() {
                    this.slideTo(1);  
                }
            }
        }); 
        
        text.on('transitionStart', function() {
            photo.slideTo(this.activeIndex);
            timeline.slideTo(this.activeIndex);
        });
        
        timeline.on('transitionStart', function() {
            photo.slideTo(this.activeIndex);
            text.slideTo(this.activeIndex);
        });
        
        photo.on('transitionStart', function() {
            text.slideTo(this.activeIndex);
            timeline.slideTo(this.activeIndex);
        });
    }

}).call(this);