  const lati = localStorage.getItem('lat');
  const longi = localStorage.getItem('long');
   document.getElementById('lat-text').textContent =lati;
   document.getElementById('long-text').textContent =longi;



  
  const url ="https://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+longi+"&appid=d0e9e65862b1c92a4befbd20294d91bd"



  async function getData(url) {
    const responce = await fetch(url);
    data = await responce.json();
   
    document.getElementsByClassName(
      "txt"
    )[0].innerText = `Location:${data.name}`;
    document.getElementsByClassName(
      "txt"
    )[1].innerHTML = `<pre>Lat:${data.coord.lat}              Long:${data.coord.lon}`;
    document.getElementsByClassName(
      "txt"
    )[2].innerText = `TimeZone:${data.timezone}`;
    document.getElementsByClassName(
      "txt"
    )[3].innerText = `WindSpeed:${data.wind.speed}`;
    document.getElementsByClassName(
      "txt"
    )[4].innerText = `Pressure:${data.main.pressure}`;
    document.getElementsByClassName(
      "txt"
    )[5].innerText = `Humidity:${data.main.humidity}`;
    document.getElementsByClassName(
      "txt"
    )[6].innerText = `Wind Direction:${data.wind.deg}`;
    document.getElementsByClassName(
      "txt"
    )[7].innerText = `Temperature:${data.main.temp}`;
    document.getElementsByClassName(
      "txt"
    )[8].innerText = `Feels Like:${data.main.feels_like}`;
  }
  getData(url);


  // var map = L.map('map').setView([lati, longi], 13);
  
  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // }).addTo(map);
  // var marker = L.marker([lati,longi]).addTo(map);
  
  
  // marker.bindPopup("<b>Your Location</b>").openPopup();