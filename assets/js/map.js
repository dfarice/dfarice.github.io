var main_color = '#82889b',
    saturation_value= -20,
    myLatlng= new google.maps.LatLng(29.717408, -95.401826),
    brightness_value= 5;


var style= [
    {
        //set saturation for the labels on the map
        elementType: "labels",
        stylers: [
            {saturation: saturation_value}
        ]
    },
    {   //poi stands for point of interest - don't show these lables on the map
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show local road lables on the map
        featureType: "road.local",
        elementType: "labels.icon",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show arterial road lables on the map
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
            {visibility: "off"}
        ]
    },
    {
        //don't show road lables on the map
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {visibility: "off"}
        ]
    },
    //style different elements on the map
    {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.government",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.sport_complex",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.attraction",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "poi.business",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "transit.station",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "landscape",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]

    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            { hue: main_color },
            { visibility: "on" },
            { lightness: brightness_value },
            { saturation: saturation_value }
        ]
    }
];


function initialize() {
    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Rice University'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);