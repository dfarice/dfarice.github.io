jQuery(document).ready(function($){
    var latitude = 29.718927,
        longitude = -95.403156,
        map_zoom = 14;

    var main_color = '#2d313f',
        saturation_value= -20,
        brightness_value= 5;

    var style= [
        {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {visibility: "off"}
            ]
        },
        {
            //set highway colors/brightness/saturation
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
            ]
        },

    ];

    var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style,
    }
}