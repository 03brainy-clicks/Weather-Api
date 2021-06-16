let city = document.getElementById("city");
let search = document.getElementById("submit");
console.log(typeof city.value);

//searched

search.addEventListener("click", function () {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q={key}" +
      city.value +
      "&appid="
//     inter your key
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      let pressure = data["main"]["pressure"];
      let humidity = data["main"]["humidity"];
      let wind = data["wind"]["speed"];
      document.getElementById(
        "change"
      ).innerHTML = `<div class="column change" id="width">
      <h3>${name}</h3>
      <div class="flex">
      <div><img src="images/newimages/${desc}.png" alt="" /></div>
          <div>
              
              <p>
                 Weather :  ${desc}<br /> Temperature : ${Math.floor(
        temp - 273.15
      )} °C
              </p>
          </div>
          <div>
              <p>
              Humidity : ${humidity}%<br /> Pressure : ${pressure} (mb)
              </p>
          </div>
          <div>
              <p>
              wind : ${wind}(mps) <br /> 
              </p>
          </div>
      </div>
  </div>`;
    })

    .catch((err) => alert("wrong city name"));
});

//indore
function Indore() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Indore&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r1c1").innerHTML = `
                      <img src="images/newimages/${desc}.png" alt="" />
                      <h3>${name}</h3>
                      <p>
                          ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                      </p>
                  </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// bhopal
function Bhopal() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=bhopal&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r1c2").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                      <h3>${name}</h3>
                      <p>
                          ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                      </p>
                  </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// delhi
function Delhi() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=delhi&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r1c3").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" /> 
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Mumbai
function Mumbai() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Mumbai&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r1c4").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Kolkata
function Kolkata() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Kolkata&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r1c5").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Chennai
function Chennai() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Chennai&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r2c1").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Banglore
function Bangalore() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Bangalore&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r2c2").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// pune
function Pune() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Pune&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r2c3").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Ahmedabad
function Ahmedabad() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r2c4").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Cochin
function Cochin() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=cochin&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r2c5").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Kota
function Kota() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Kota&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r3c1").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Shimla
function Shimla() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Shimla&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r3c2").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Srinagar
function Srinagar() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Srinagar&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r3c3").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Patna
function Patna() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=patna&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r3c4").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}
// Rishikesh
function Rishikesh() {
  fetch(
    "https:api.openweathermap.org/data/2.5/weather?q=Rishikesh&appid={key}"
  )
    .then((response) => response.json())
    .then((data) => {
      let name = data["name"];
      let temp = data["main"]["temp"];
      let desc = data["weather"][0]["description"];
      document.getElementById("r3c5").innerHTML = `
      <img src="images/newimages/${desc}.png" alt="" />
                        <h3>${name}</h3>
                        <p>
                            ${desc}<br /> ${Math.floor(temp - 273.15)} °C
                        </p>
                    </div>`;
    })

    .catch((err) => alert("wrong city name"));
}

// refresh calling function

setTimeout(() => {
  Indore();
  Kolkata();
  Chennai();
  Bangalore();
  Pune();
  Cochin();
  Ahmedabad();
  Bhopal();
  Delhi();
  Mumbai();
  Kota();
  Shimla();
  Srinagar();
  Patna();
  Rishikesh();
}, 1000);
