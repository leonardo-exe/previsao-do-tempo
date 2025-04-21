const weatherCodeMap = {
    0: { desc: "Céu limpo", icon: "☀️", iconUrl: "https://open-meteo.com/images/weather_icons/clear.svg" },
    1: { desc: "Parcialmente nublado", icon: "🌤️", iconUrl: "https://open-meteo.com/images/weather_icons/partly-cloudy.svg" },
    2: { desc: "Nublado", icon: "☁️", iconUrl: "https://open-meteo.com/images/weather_icons/cloudy.svg" },
    3: { desc: "Encoberto", icon: "🌫️", iconUrl: "https://open-meteo.com/images/weather_icons/overcast.svg" },
    45: { desc: "Nevoeiro", icon: "🌁", iconUrl: "https://open-meteo.com/images/weather_icons/fog.svg" },
    48: { desc: "Nevoeiro com geada", icon: "❄️🌁", iconUrl: "https://open-meteo.com/images/weather_icons/fog-frost.svg" },
    51: { desc: "Garoa leve", icon: "🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/drizzle.svg" },
    53: { desc: "Garoa moderada", icon: "🌧️🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/rain.svg" },
    55: { desc: "Garoa intensa", icon: "🌧️🌧️🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/rain.svg" },
    56: { desc: "Garoa congelante leve", icon: "🌧️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/freezing-drizzle.svg" },
    57: { desc: "Garoa congelante intensa", icon: "🌧️❄️🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/freezing-drizzle.svg" },
    61: { desc: "Chuva leve", icon: "🌦️", iconUrl: "https://open-meteo.com/images/weather_icons/rain.svg" },
    63: { desc: "Chuva moderada", icon: "🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/rain.svg" },
    65: { desc: "Chuva intensa", icon: "🌧️🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/heavy-rain.svg" },
    66: { desc: "Chuva congelante leve", icon: "🌧️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/freezing-rain.svg" },
    67: { desc: "Chuva congelante intensa", icon: "🌧️❄️🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/freezing-rain.svg" },
    71: { desc: "Neve leve", icon: "❄️", iconUrl: "https://open-meteo.com/images/weather_icons/snow.svg" },
    73: { desc: "Neve moderada", icon: "❄️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/snow.svg" },
    75: { desc: "Neve intensa", icon: "❄️❄️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/heavy-snow.svg" },
    77: { desc: "Grãos de neve", icon: "🌨️", iconUrl: "https://open-meteo.com/images/weather_icons/snow.svg" },
    80: { desc: "Pancadas de chuva leve", icon: "⛈️", iconUrl: "https://open-meteo.com/images/weather_icons/showers.svg" },
    81: { desc: "Pancadas de chuva moderada", icon: "⛈️⛈️", iconUrl: "https://open-meteo.com/images/weather_icons/showers.svg" },
    82: { desc: "Pancadas de chuva intensa", icon: "⛈️⛈️⛈️", iconUrl: "https://open-meteo.com/images/weather_icons/heavy-showers.svg" },
    85: { desc: "Pancadas de neve leve", icon: "❄️⛈️", iconUrl: "https://open-meteo.com/images/weather_icons/snow-showers.svg" },
    86: { desc: "Pancadas de neve intensa", icon: "❄️⛈️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/heavy-snow-showers.svg" },
    95: { desc: "Tempestade leve/moderada", icon: "⚡🌧️", iconUrl: "https://open-meteo.com/images/weather_icons/thunderstorm.svg" },
    96: { desc: "Tempestade com granizo", icon: "⚡🌧️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/thunderstorm-hail.svg" },
    99: { desc: "Tempestade com granizo intenso", icon: "⚡🌧️❄️❄️", iconUrl: "https://open-meteo.com/images/weather_icons/thunderstorm-hail.svg" }
}
function imagem (cod) {
    const corpo = document.querySelector('body')
    if (cod == 0)
        corpo.style.backgroundImage = 'url(acets/0.jpg)'
    else if (cod == 1){ 
        corpo.style.backgroundImage = 'url(acets/1.jpg)'
        corpo.style.color = 'black'
        corpo.style.border = 'black, solid, 2px'
    }
    else if (cod == 2)
        corpo.style.backgroundImage = 'url(acets/2.jpg)'
    else if (cod == 3)
        corpo.style.backgroundImage = 'url(acets/3.jpg)'
    else if (cod >= 45 && cod <= 48)
        corpo.style.backgroundImage = 'url(acets/45.jpg)'
    else if (cod >= 51 && cod <= 57){ 
        corpo.style.backgroundImage = 'url(acets/51.jpg)'
        corpo.style.color = 'black'
        corpo.style.border = 'black, solid, 2px'
    }
    else if (cod >= 61 && cod <= 63)
        corpo.style.backgroundImage = 'url(acets/61.jpg)'
    else if (cod >= 65 && cod <= 67){ 
        corpo.style.backgroundImage = 'url(acets/65.jpg)'
        corpo.style.color = 'black'
        corpo.style.border = 'black, solid, 2px'
    }
    else if (cod >= 71 && cod <= 77){ 
        corpo.style.backgroundImage = 'url(acets/71.jpg)'
        corpo.style.color = 'black'
        corpo.style.border = 'black, solid, 2px'
    }
    else if (cod >= 80 && cod <= 86)
        corpo.style.backgroundImage = 'url(acets/80.jpg)'
    else 
        corpo.style.backgroundImage = 'url(acets/95.jpg)'
}
function horaAtual () {
    let data = new Date()
    var id = document.querySelector('.div2')
    let horario = [data.getHours(), data.getMinutes(), data.getSeconds()]
    for (let i in horario)
        if (horario[i] < 10)
            horario[i] = `0${horario[i]}`
    id.innerHTML = `${horario[0]}:${horario[1]}:${horario[2]}`
}
setInterval(horaAtual, 1000)
async function cidade (latitude, longitude) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        const data = await response.json()
        console.log(data)
        let cidade = data.address.city || data.address.town || data.address.village || data.address.hamlet || 'Local desconhecido'
        document.querySelector('div.div1').innerHTML = cidade
    } catch (erro) {
        alert('Erro ao obter cidade: ' + erro.message)
        document.querySelector('div.div1').innerHTML = 'Local desconhecido'
    }
}
async function clima (lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    const data = await response.json()
    document.querySelector("div#graus").textContent = `${data.current_weather.temperature}°C`
    const cod = data.current_weather.weathercode
    var climaInfo = weatherCodeMap[cod]
    document.querySelector('div#clima').innerHTML = climaInfo.desc+climaInfo.icon
    imagem(cod)
}
addEventListener("DOMContentLoaded", function () { 
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                cidade(lat, lng)
                clima(lat, lng)
            },
            (erro) => {
                document.querySelector('div.div1').innerHTML = 'Erro: ' + erro.message
            }
        )
    }
    const data = new Date()
    document.querySelector('header#dia').innerHTML = `${data.getDate() < 10 ? '0' + data.getDate() : data.getDate()}/${data.getMonth()+1 < 10 ? '0' + (data.getMonth()+1) : data.getMonth+1}/${data.getFullYear()}`
})
