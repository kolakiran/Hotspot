var currentLat = "";
       var currentlong = "";
       $(document).ready(function() {
         if(navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(function(position) {
               currentLat = position.coords.latitude;
               currentlong = position.coords.longitude;
               getZipcode(position.coords.latitude,position.coords.longitude);
           });
          }
         else
         {alert('navigator.geolocation not supported.');}
          $("#global-search-terms").keyup(function(event){
            //if(event.target.value.length === 5) {
              loadWifiData(event.target.value);
           // } 
           if(event.target.value.length < 5) {
            $('#HS_wrapper_block').html('');
           }
          });
       });
getZipcode = (lat,long) => {
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&key=AIzaSyChbhY6ZCyep-fYZ9FeDI_f5xpjt2ZoemE', function(data) {
        $.each(data.results[0].address_components,function(key,val){
          if(val.types[0] === 'postal_code') {
              loadWifiData(val.short_name);
          }
        });
    });
  };
  loadWifiData = (zipcode) => {
    $.getJSON('https://data.cityofnewyork.us/resource/24t3-xqyv.json?zip='+zipcode, function(data) {
      var cleardiv = '<div class="clear"></div>';
      var i=0,j=0;
//       wifihotspotdata = loadData(data);
      $('#HS_wrapper_block').html('');
      $.each(data, function(key,value){
         var hotspot = "<div class='four_columns_4cells'><div class='category_content'><h3 class=''>"+value.ssid+"</h3>";
         var latlong = "<p> Latitude and longitude <br />"+value.latitude+","+value.longitude+"</p>   </div></div>";
         if(j%4 == 0) {
           i = j/4;
           var div = '<div id="four_columns'+i+'" class="four_columns clearfix"></div>';
           $('#HS_wrapper_block').append(div);
           $('#four_columns'+i).append(hotspot+latlong);
         }
         else {
           $('#four_columns'+i).append(hotspot+latlong);
         }

         if(j%4 === 0) {
             $('#HS_wrapper_block').append(cleardiv);
         }
         j++;

      });
    });
  };
  loadData = (data) => {
    $.each(data, function(key,value){
       distance_val = distance(currentLat,currentlong,value.latitude,value.longitude,'M');
       wifihotspot['"'+distance_val+'"'] = value;
    });
    return wifihotspot.sort();
  }
  distance = (lat1, lon1, lat2, lon2, unit) => {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist.toFixed(3);

    }
  }
