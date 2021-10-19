console.log("😈");
$(document).ready(function () {
  console.log("👻");

  let marker;

  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 49.246292, lng: -123.116226 },
    });
  
    marker = new google.maps.Marker({
      map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 49.246292, lng: -123.116226 },
    });
    marker.addListener("click", toggleBounce);
  }
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  initMap();

  var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  
});
// Dynamically add marker to Google Map

// var contactLatitude = 42;
// var contactLongitude = -72;

// function initialize() {
//   var mapCanvas = document.getElementById('map');
//   var myLatLng = {
//     lat: contactLatitude,
//     lng: contactLongitude
//   };
//   var mapOptions = {
//     center: new google.maps.LatLng(contactLatitude, contactLongitude),
//     zoom: 8,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(mapCanvas, mapOptions);
//   addMarker(myLatLng, map);
// }

// function addMarker(location, map) {
//   var marker = new google.maps.Marker({
//     position: location,
//     title: 'Home Center',
//     map: map
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);