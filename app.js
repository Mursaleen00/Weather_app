

let city_name = document.getElementById('city');
// let icon = document.getElementById('icon');
let temp = document.getElementById('temp');

function input_name() {
    let input = document.getElementById('input').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=0da6fd6bd4beb5fb8fdbdd3c7b58b839`

    fetch(url)
        .then((res) => (res).json())
        .then((data) => {
            city_name.innerHTML = data.name + ', ' + data.sys.country + "<hr>";
            temp.innerHTML = `${Math.ceil(data.main.temp)} °C <i class="fa-solid fa-temperature-three-quarters"></i>`;
            document.getElementById('feel_like').innerHTML = `Feels Like <span class="text_1">${Math.ceil(data.main.feels_like)}</span> °C <sub><i class="fa-solid fa-temperature-three-quarters"></sub><hr>`;
            document.getElementById('humidity').innerHTML = `Humidity <span class="text_1">${data.main.humidity}</span>% <i class="fa-solid fa-droplet"></i> <hr>`;
            document.getElementById('wind').innerHTML = `~~~:Wind:~~~`;
            document.getElementById('deg').innerHTML = `Degree <span class="text_1">${data.wind.deg}</span> <hr>`;
            document.getElementById('speed').innerHTML = `Speed <span class="text_1">${data.wind.speed}</span>km/h <i class="fa-solid fa-wind"></i><hr>`;
            document.getElementById('weather').innerHTML = `~~~:Weather:~~~`;
            document.getElementById('main').innerHTML = `<span class="text_1"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">${data.weather[0].main} </span> <hr>`;
            document.getElementById('dis').innerHTML = `<span class="text_1">${data.weather[0].description}</span><hr>`;
            console.log(data);
        })
}

// 0da6fd6bd4beb5fb8fdbdd3c7b58b839 

