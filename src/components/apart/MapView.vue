<template>
  <div id="map" style="width: 100%; height: 500px; margin: auto;" :v-model="map"></div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCn98kIQSaby2Zg2mEp4_Gd34M_QNmn3Zc&callback=initMap"></script>

<script>
export default {
  data() {
    return {
      multi : { lat: 37.5012743, lng: 127.039585 },
      map : Object,
      markers : [],
      infoWindow : Object,
    };
  },
  methods : {

  initMap() {
    let mapOptions = {
      center: this.multi,
      zoom: 15,
    }
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: multi,
    });
    
    
  },
    // <c:forEach items = '${searchDonglist}' var = "item"> ;
    //     var officemarker = {
    //         coords: { lat: "${item.lat}", lng: "${item.lng}" },
    //         iconImage: null,
    //         content: "<center>[" +"${item.aptName}"+ "]<br>거래가 : " +"${item.dealAmount}"+ "</center>"
    //         };
          
    //       addMarker(officemarker);
        
    // </c:forEach>
    
      


      handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
              'Error: Geolocation 서비스 실패.' :
              'Error: Geolocation을 지원하지 않는 브라우저.');
          infoWindow.open(map);
      },

      addMarker(props) {
          const marker = new google.maps.Marker({
              position: new google.maps.LatLng(parseFloat(props.coords.lat), parseFloat(props.coords.lng)),
              map: map
          });
          i = props.content;
          map.setCenter(marker.getPosition());
          map.setZoom(15);

          if (props.iconImage) {
              marker.setIcon(props.iconImage);
          }

          
          const infoWindow = new google.maps.InfoWindow({
              content: props.content
          });
          

          marker.addListener('click', function () {
              map.setZoom(17);
              map.setCenter(marker.getPosition());
              bounceMarker(marker);
              infoWindow.open(map, marker)
          });
          markers.push(marker);
          setMapOnAll(map);
      },

      bounceMarker(marker) {
          if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
          } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
          }
      },

      deleteMarkers() {
          clearMarkers();
          markers = [];
      },

      clearMarkers() {
          setMapOnAll(null);
      },

      setMapOnAll(map) {
          for (let i = 0; i < markers.length; i++) {
              markers[i].setMap(map);
          }
      },

      moveMap(Lat, Lon, Zoomlevel) {
          map.setZoom(15);
                        
          Lat = parseFloat(Lat);
          Lon = parseFloat(Lon);
          setTimeout(function () {
              var moveLatLon = new google.maps.LatLng(Lat, Lon);
              map.panTo(moveLatLon);
              map.setZoom(Zoomlevel);
          }, 1000);                
      }
  },
  // watch: {
  //   apt: function(newVal, oldVal) {
  //     this.addM(newVal);
  //   },
  //   aptlist: function(newVal, oldVal) {
  //     this.addMarkersAll(newVal);
  //   }
  // }
}
</script>

<style>

</style>