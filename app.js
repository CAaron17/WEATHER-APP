let api_key = "72bb45c6942872898a0f1cbb27391057";
const img = "https://openweathermap.org/img/wn/10d@2x.png";
let card = document.getElementById("card");
const buttonWeather = document.getElementById("get-weather");

buttonWeather.addEventListener("click", (e) => {
  e.preventDefault();
  let namecity = document.getElementById("name-city").value;

  const getCity = async () => {
    try {
      const restPost = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${api_key}&units=metric`
      );
      const post = await restPost.json();
      const getImgWeather = post.weather[0].main;
      let setImgWeather = "";

      if (getImgWeather === "Clouds") {
        setImgWeather = "images/clouds.png";
      } else if (getImgWeather === "Clear") {
        setImgWeather = "images/clear.png";
      } else if (getImgWeather === "Rain") {
        setImgWeather = "images/rain.png";
      } else if (getImgWeather === "Drizzle") {
        setImgWeather = "images/drizzle.png";
      } else if (getImgWeather === "Mist") {
        setImgWeather = "images/mist.png";
      } else if (getImgWeather == "Thunderstorm") {
        setImgWeather = "images/Thunderstorm.png";
      }
      card.textContent = "";
      card.innerHTML = `
        <img src="${setImgWeather}" alt="" />
        <h2>${post.main.temp} °C</h2>
        <h1> ${post.name}, ${post.sys.country} </h1>
    `;
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };
  getCity();
});
