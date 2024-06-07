const button = document.getElementById('search-button')
const input = document.getElementById('city-input')

const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getData(cityName) {
    const url = `http://api.weatherapi.com/v1/current.json?key=560aed6161a247bb85d155210240706&q=${cityName}&aqi=yes`
    const promise = await fetch(url)
    return await promise.json()
}

button.addEventListener('click', async () => {
    const value = input.value
    const res = await getData(value)
    cityName.innerText = `${res.location.name}, ${res.location.region} - ${res.location.country}`
    cityTime.innerText = res.location.localtime
    cityTemp.innerText = res.current.temp_c
})
