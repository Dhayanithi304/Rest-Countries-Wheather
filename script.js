var body = document.body;
var div1 = document.createElement("div");
div1.classList.add("container");
body.append(div1);

var div2 = document.createElement("div");
div2.classList.add("row");
div1.append(div2);

async function getDatas() {
  var url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    const data = await response.json();
    for (var details of data) {
      var div3 = document.createElement("div");
      div3.classList.add(
        "card",
        "h-100",
        "col-lg-4",
        "col-sm-12",
        "bg-light",
        "text-center"
      );
      div2.append(div3);

      var div3_1 = document.createElement("div");
      div3_1.classList.add("card-header", "head");
      div3.append(div3_1);

      var h6 = document.createElement("h6");
      h6.classList.add("card-title");
      h6.innerText = details.name.common;
      div3_1.append(h6);

      var img = document.createElement("img");
      img.classList.add("card-img-top", "img");
      img.setAttribute("alt", "Card img");
      img.setAttribute(
        "src",
        details.flags.png ? details.flags.png : details.flags.svg
      );
      div3.append(img);

      var div4 = document.createElement("div");
      div4.classList.add("card-body");
      div3.append(div4);

      var p1 = document.createElement("p");
      p1.classList.add("card-text");
      p1.innerText = "Captial: " + details.capital;

      var p2 = document.createElement("p");
      p2.classList.add("card-text");
      p2.innerText = "Region: " + details.region;

      var p3 = document.createElement("p");
      p3.classList.add("card-text");
      p3.innerText = "LatLng: " + details.latlng.join(", ");

      var p4 = document.createElement("p");
      p4.classList.add("card-text");
      p4.innerText = "Country Code: " + details.cca2;

      var button = document.createElement("button");
      button.classList.add("btn", "btn-primary");
      button.textContent = "Click to Weather";
      div4.append(p1, p2, p3, p4, button);
      // console.log(details.latlng);

      var lat = details.latlng[0];
      var long = details.latlng[1];
      var apiKey = "f3e6072554ea23fc4fdcf44d53c108a2";
      var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    
      var response2 = await fetch(weatherURL);
      var data2 = await response2.json();

      button.addEventListener("click", getWeather);
      function getWeather() {
        // console.log(data2);
        var a = div3_1.innerText;
        var b = img.getAttribute("src");
        div2.style.display = "none";
        // div1.classList.add("hidden");
        let x = [];
        x.push(div4.firstElementChild.textContent);
        x = x[0].split(",").map(Number);

        var div_a = document.createElement("div");
        div_a.classList.add("container");
        body.append(div_a);

        var div_b = document.createElement("div");
        div_b.classList.add("row","text-center");
        
        div_b.innerHTML = `
        <div class="card text-center col-lg-4 col-sm-12 h-100 bg-light">
        <div class="card-header">
        <h6 class="card-title">${a}</h6>
        </div>
        <img src="${b}" class="card-img-top img2" alt="Country img">
        <div class="card-body">
        <p class="card-text">weather: ${data2.weather[0].description}</p>
        <p class="card-text">weather: ${data2.main.temp}°C</p>
        <p class="card-text">weather: ${data2.wind.speed}m/sec </p>
        <button class="btn btn-primary" onClick="returnFunction()">Click to Return</button>
        </div>
        </div>
        `;
        div_a.append(div_b);
        function returnFunction(){
          div_b.style.display="none";
          div2.style.display="inline-block";
        }
        // console.log(data2);
      }
    }
  } catch (err) {
    console.error("Error Occured:", err);
  }
}
getDatas();
