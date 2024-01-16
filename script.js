var xhr = new XMLHttpRequest();

var method = "GET";
var url = "https://restcountries.com/v3.1/all";

//open the Request
xhr.open(method, url);

xhr.onload = function () {
  if (xhr.status === 200) {
    var details = JSON.parse(xhr.responseText);
    // console.log(details);
    //1::get all the countries from asia continent/ region using filter function
    // var result = details.filter((item) => item.region ==='Asia');
    // console.log(result);

    //2::get all the countries with a population of less than 2 lakhs using filter function
    // var result = details.filter((item) => item.population < 200000 );
    // console.log(result);

    //3::print the following detals name, capital, flag using forEach function
    // Object.entries(details).forEach((key) => {
    //     key.name
    //     console.log(key);
    // })
    var body = document.body;
    var div1 = document.createElement("div");
    div1.classList.add("container");
    body.append(div1);
    
    var div2 = document.createElement("div");
    div2.classList.add("row");
    div1.append(div2);
    
    console.log(details);
    for (i = 0; i < details.length; i++) {

      var div3 = document.createElement("div");
      div3.classList.add("card","h-100", "col-lg-4", "col-sm-12","bg-light","text-center");
      div2.append(div3);

      var div3_1 = document.createElement("div");
      div3_1.classList.add("card-header");
      div3.append(div3_1)

      var h6 = document.createElement("h6");
      h6.classList.add("card-title");
      h6.innerText = details[i].name.common;
      div3_1.append(h6);

      var img = document.createElement("img");
      img.classList.add("card-img-top", "img");
      img.setAttribute("src",details[i].flags.png);
      div3.append(img);

      var div4 = document.createElement("div");
      div4.classList.add("card-body");
      div3.append(div4);

      var p1 = document.createElement("p");
      p1.classList.add("card-text");
      p1.innerText ="Captial: " + details[i].capital;

      var p2 = document.createElement("p");
      p2.classList.add("card-text");
      p2.innerText ="Region: " + details[i].region;

      var p3 = document.createElement("p");
      p3.classList.add("card-text");
      p3.innerText ="LatLng: " + details[i].latlng;

      var p4 = document.createElement("p");
      p4.classList.add("card-text");
      p4.innerText ="Country Code: " + details[i].cca2;

      var button = document.createElement('a');
      button.classList.add("btn", "btn-primary");
      button.textContent = "Click to Wheather";
      div4.append(p1,p2,p3,p4,button);

    }

    //4::print the total population of countries using reduce function
    // var result = details.reduce((a , b) => a + b.population, 0);
    // console.log(result);

    //5::Print the country which users US Dollers as currency
    // for(let i=0; i < details.length; i++){
    //         if(details[i].currencies != undefined ){
    //             Object.keys(details[i].currencies).forEach((key) => {
    //                 if(key == "USD"){
    //                     console.log(key, details[i].currencies[key]);
    //                 }
    //             });
    //     }
    //     }
  } else {
    console.log("Request Failed", xhr.status);
  }
};

xhr.send();
