const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "b111e5a338bf74e998416e388fb8f43e";

weatherform.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityinput.value;
    if (city) {
        try {
            const weatherData = await getweatherData(city);
            displayweatherinfo(weatherData);

        } catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("please enter a city");

    }


});

async function getweatherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if (!response.ok) {
        throw new Error("could not fetch weather data");
    }
    return await response.json();


}

function displayweatherinfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humiDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatheremoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
    humiDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatheremoji.textContent = getweatheremoji(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humiDisplay.classList.add("humiDisplay");
    descDisplay.classList.add("descDisplay");
    weatheremoji.classList.add("weatheremoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humiDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatheremoji);




}

function getweatheremoji(weatherid) {
    switch (true) {
        case (weatherid >= 200 && weatherid < 300):
            return "⛈️";
        case (weatherid >= 300 && weatherid < 400):
            return "🌧️";
        case (weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case (weatherid >= 600 && weatherid < 700):
            return "❄️";
        case (weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case (weatherid === 800):
            return "☀️";
        case (weatherid >= 801 && weatherid < 810):
            return "☁️";
        default:
            return "🛸";
    }


}

function displayError(message) {
    const Errordisplay = document.createElement("p");
    Errordisplay.textContent = message;
    Errordisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(Errordisplay);



}