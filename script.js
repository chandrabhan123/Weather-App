const apiKey = '67f0f1d5bcda22d0df7b09b3dcfc16d0';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector(".search input")

const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    let data = await response.json();
    // console.log(data);
    if (response.status == 404) {
        document.querySelector(".error-msg").style.display = "block";

        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src == "images/weather.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.jpg"
        }
        else if (data.weather[0].main == 'sunny') {
            weatherIcon.src = "images/sunny.png"
        }

        document.querySelector(".weather").style.display = "Block"
        document.querySelector(".error-msg").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

