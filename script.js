const body = document.body;
const div1 = document.createElement("div");
div1.classList.add("container");
body.append(div1);

const div2 = document.createElement("div");
div2.classList.add("row");
div1.append(div2);

async function getDatas() {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    const data = await response.json();
    for (var details of data) {
      const div3 = document.createElement("div");
      div3.classList.add(
        "card",
        "h-100",
        "col-lg-4",
        "col-sm-12",
        "bg-light",
        "text-center"
      );
      div2.append(div3);

      const div3_1 = document.createElement("div");
      div3_1.classList.add("card-header", "head");
      div3.append(div3_1);

      const h6 = document.createElement("h6");
      h6.classList.add("card-title");
      h6.textContent = `${details?.name?.common}`;
      div3_1.append(h6);

      const img = document.createElement("img");
      img.classList.add("card-img-top", "img");
      img.setAttribute("alt", "Card img");
      img.setAttribute(
        "src",
        `${details?.flags?.png ? details?.flags?.png : details?.flags?.svg}`
      );
      div3.append(img);

      const div4 = document.createElement("div");
      div4.classList.add("card-body");
      div3.append(div4);

      const p1 = document.createElement("p");
      p1.classList.add("card-text");
      p1.innerText = "Captial: " + details?.capital[0];

      const p2 = document.createElement("p");
      p2.classList.add("card-text");
      p2.innerText = "Region: " + details?.region;

      const p3 = document.createElement("p");
      p3.classList.add("card-text");
      p3.innerHTML = `LatLng: <span>${details?.latlng[0]}, ${details?.latlng[1]}</span>`;

      const p4 = document.createElement("p");
      p4.classList.add("card-text");
      p4.innerText = `Country Code: ${details?.altSpellings[0]}`;

      const button = document.createElement("button");
      button.classList.add("btn", "btn-primary");
      button.textContent = "Click to Weather";
      div4.append(p1, p2, p3, p4, button);

      const lat = details?.latlng[0];
      const long = details?.latlng[1];
      const apiKey = "fbb352a417c0f980535df5d4a273be35";
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      const res2 = await fetch(weatherURL);
      const data2 = await res2.json();

      button.addEventListener("click", getWeather);
      function getWeather() {
        // console.log(details?.latlng[0], details?.latlng[1]);

        const a = h6.textContent;
        const b = img.getAttribute("src");
        div2.style.display = "none";
        
        // const x = [];
        // x.push(p3.firstElementChild.textContent);
        // x = x[0].split(",").map(Number);
        
        const div_a = document.createElement("div");
        div_a.classList.add("container");
        body.append(div_a);

        const div_b = document.createElement("div");
        div_b.classList.add("row");

        div_b.innerHTML = `
        <div class="card text-center col-lg-4 col-sm-12 h-100 bg-light">
          <div class="card-header">
            <h6 class="card-title text-center">${a}</h6>
          </div>
          <img src="${b}" class="card-img-top img2" alt="Country img">
          <div class="card-body">
            <p class="card-text">Weather: ${data2?.weather[0].description}</p>
            <p class="card-text">Temp: ${data2?.main?.temp}°C</p>
            <p class="card-text">Wind speed: ${data2?.wind?.speed}m/sec </p>
            <p class="card-text">Sea level: ${data2?.main?.sea_level}m/sec </p>
            <button class="btn btn-primary" id="returnBtn">Click to Return</button>
        </div>
        </div>
        `;
        div_a.append(div_b);
        document.getElementById("returnBtn").addEventListener("click", () => {
          location.reload();
        });
        // console.log(data2);
      }
    }
  } catch (err) {
    console.error("Error Occured:", err);
  }
}
getDatas();
