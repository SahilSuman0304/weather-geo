function geoFindMe() {

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log([latitude,longitude]);
   
    localStorage.setItem('lat',latitude);
    localStorage.setItem('long',longitude);
    window.location.href="weather.html";
  }
    navigator.geolocation.getCurrentPosition(success);
}

