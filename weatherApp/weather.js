async function search() {
  const tempa = document.getElementById("temp");
  const humid = document.getElementById("humi");
  const winds = document.getElementById("wind");
  const msg = document.getElementById("msg");
  const input = document.getElementById("val");
  const city = input.value.trim();

  if (city === "") {
    alert("no cities enteres");
    return;
  }
  const places = ["Kolkata", "Mumbai", "Delhi", "Pune", "Patna"];

  async function getdata(place) {
    const url = `https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${place}&days=3`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1dd024e842msh3eeb0b16a2e5f5ep18a639jsn163586ab4918",
        "x-rapidapi-host": "apjoy-weather-forecast.p.rapidapi.com",
      },
    };
    var tabledata = document.getElementById("table");
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("ERROR");
      }
      const result = await response.json();
      // console.log(result);

      if (places.includes(place)) {
        tabledata.innerHTML += `
          <tr>
          <td>${place}</td>
          <td>${result.list[2].clouds.all}</td>
          <td>${result.list[1].main.temp_min}</td>
          <td>${result.list[1].main.temp_max}</td>
          <td>${result.city.coord.sunrise}</td>
          <td>${result.city.coord.sunset}</td>
          <td>${result.list[0].main.humidity}</td>
    
          </tr>`;
      } else {
        msg.innerHTML = `Weather For ${city}`;
        tempa.innerHTML = `${result.list[0].main.temp}°C`;
        humid.innerHTML = `${result.list[0].main.humidity}%`;
        winds.innerHTML = `${result.list[0].wind.speed}km/h`;
      }
    } catch (error) {
      if (places.includes(place)) {
        tabledata.innerHTML += `
            <tr>
            <td>${place}</td>
            <td>No Data Found</td>
            <td>No Data Found</td>
            <td>No Data Found</td>
            <td>No Data Found</td>
            <td>No Data Found</td>
            <td>No Data Found</td>
          
      
            </tr>`;
      } else {
        // msg.innerHTML = `Weather For ${city}`;
        // tempa.innerHTML = `${result.list[0].main.temp}°C`;
        // humid.innerHTML = `${result.list[0].main.humidity}%`;
        // winds.innerHTML = `${result.list[0].wind.speed}km/h`;

        msg.innerHTML = `No data found for ${city}`;
        tempa.innerHTML = "__";
        humid.innerHTML = "__";
        winds.innerHTML = "__";
      }
      // console.error(error);
    }
  }
  // Fetch Weather For user input location
  await getdata(city);

  // Fetch Weather for predefined places
  for (let place of places) {
    await getdata(place);
  }
}
