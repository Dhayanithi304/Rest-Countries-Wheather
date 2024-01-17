var url = "https://restcountries.com/v3.1/all";

  fetch(url)
  .then((response)=>{
    if (response.status === 200) {
    return response.json();
  } else {
    console.log("Request Failed", response.status);
  }
})
.then((details)=>{

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
      div3_1.classList.add("card-header","head");
      div3.append(div3_1);

      var h6 = document.createElement("h6");
      h6.classList.add("card-title");
      h6.innerText = details[i].name.common;
      div3_1.append(h6);

      var img = document.createElement("img");
      img.classList.add("card-img-top", "img");
      img.setAttribute("alt","Card img");
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
  })
.catch((err)=>{
  console.log("Error", err);
});
