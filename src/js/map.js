const loadGoogleMapsApi = require('load-google-maps-api');

(function() {
    
    const obj = document.getElementsByClassName('js-map')[0];
    
    if (obj) {

        const initMap = function() {
            loadGoogleMapsApi({
                key: 'AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY'
                }).then(function (googleMaps) {
            
                var mapStyle = [
                    {
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#63b5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "gamma": 0.01
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "saturation": -31
                            },
                            {
                                "lightness": -33
                            },
                            {
                                "weight": 2
                            },
                            {
                                "gamma": 0.8
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "hue": "#0068ff"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 30
                            },
                            {
                                "saturation": 30
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#e9f1ff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#1574ff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#1574ff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#d4e0f5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#1574ff"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 20
                            },
                            {
                                "saturation": -20
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 10
                            },
                            {
                                "saturation": -30
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "saturation": 25
                            },
                            {
                                "lightness": 25
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#1574ff"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#1574ff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#1574ff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": -20
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#baccec"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#ff0000"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ];
                
                const el = document.querySelector('.js-map');
                let lat = Number(el.getAttribute('data-lat')),
                    lng = Number(el.getAttribute('data-lng'));
            
                var map = new googleMaps.Map(el, {
                    center: {
                        lat: lat,
                        lng: lng
                    },
                    styles: mapStyle,
                    zoom: 16
                });
                
                               
                
                var image = {
                    url: 'img/marker.png'
                    //scaledSize: new google.maps.Size(82, 110), // scaled size
                    //origin: new google.maps.Point(0,0), // origin
                    //anchor: new google.maps.Point(50, 20) // anchor
                }
            
                var beachMarker = new google.maps.Marker({
                    position: {lat: lat, lng: lng},
                    animation: google.maps.Animation.DROP,
                    map: map,
                    icon: "data:image/png;base64,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Z2VSZWFkeXHJZTwAAAN6aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjExNzQwNzIwNjgxMUJFOUU4M0Y3N0M3MTY3M0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0M5QTJDRTA1RThGMTFFOEJFQUI4MzVDNjgwN0FGQjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0M5QTJDREY1RThGMTFFOEJFQUI4MzVDNjgwN0FGQjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFEMzlENENGMjAyMDY4MTE5MTA5Rjc2MkNCOUQ1NTYzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZWVmMmYwYzgtYTE1Zi04MjRlLWJkZWYtOGVhMGNmNDg0MGJmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQg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"
                });
            
            }).catch(function (error) {
                console.error(error)
            })
        };
    
        const init = function() {
        
            initMap();
            console.log('fire map');
                               
        }
        
        init();
    }
    
}).call(this);


