document.getElementById('weatherButton').addEventListener('click', () =>{
    const city = document.getElementById('city').value.trim();
    if(city){
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    const apiKey = '7b9ed2868d2ebde0af6d2dfb6b5da1a4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.cod === 200) {
        displayWeatherData(data);
    } else {
        document.getElementById('Result').innerHTML = `<p class="text-red-500">City not found. Please try again.</p>`;
    }
}

function displayWeatherData(data) {
    const div = document.getElementById('Result');
    div.innerHTML = `
        <h2 class="text-xl font-bold text-gray-800">${data.name}, ${data.sys.country}</h2>
        <p class="text-lg">Temperature: ${data.main.temp} °C</p>
        <p class="text-lg">Humidity: ${data.main.humidity} %</p>
        <p class="text-lg">Wind Speed: ${data.wind.speed} m/s</p>
        <p class="text-lg">Weather: ${data.weather[0].description}</p>
    `;
}
