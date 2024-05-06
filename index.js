let input = document.querySelector("input")
let form = document.querySelector("form")
let cloud = document.querySelector(".cloud")
let celsious = document.querySelector(".celsious")
let thunder = document.querySelector(".thunder")
let date = document.querySelector(".date")
let city = document.querySelector(".city")
let suntext2 = document.querySelector(".sun-text-2")
let settext1 = document.querySelector(".set-text-1")
let airtext2 = document.querySelector(".air-text-2")
let humiditytext2 = document.querySelector(".humidity-text-2")



let sunday = document.querySelector(".sun-text")
let monday = document.querySelector(".monday")
let tuesday = document.querySelector(".tuesday")
let wedn = document.querySelector(".wedn")
let thursday = document.querySelector(".thursday")
let friday = document.querySelector(".friday")
let saturday = document.querySelector(".saturday")


let sunImg = document.querySelector(".sund-img")
let monImg = document.querySelector(".mon-img")
let tueImg = document.querySelector(".tues-img")
let wedImg = document.querySelector(".wed-img")
let thuImg = document.querySelector(".thus-img")
let friImg = document.querySelector(".fris-img")
let satImg = document.querySelector(".sat-img")




let temp1 = document.querySelector(".temp")
let temp2 = document.querySelector(".temp-2")
let temp3 = document.querySelector(".temp-3")
let temp4 = document.querySelector(".temp-4")
let temp5 = document.querySelector(".temp-5")
let temp6 = document.querySelector(".temp-6")
let temp7 = document.querySelector(".temp-7")





const getweather = async (e)=>{
    e.preventDefault();
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=af69b7e7129545d9aed181641240505&q=${input.value}&days=10&aqi=yes&alerts=yes`)
    // const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=88a2712454834f7ea8071600240102&q=${input.value}&days=10&aqi=yes&alerts=yes`)
    // const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=88a2712454834f7ea8071600240102&q=${input.value}&days=10&aqi=yes&alerts=yes`)
    
    const data = await response.json()
    //  console.log(celsious);
    console.log(data);
    cloud.setAttribute("src", data.forecast.forecastday[0].day.condition.icon)
    // console.log(data.forecast.forecastday[0].day.condition.icon);
    celsious.innerText =data.forecast.forecastday[0].hour[11].temp_c + "°"
    thunder.innerText =  data.forecast.forecastday[0].day.condition.text
    date.innerText = data.forecast.forecastday[0].date
    city.innerText = data.location.name
    suntext2.innerText = data.forecast.forecastday[0].astro.sunrise
    settext1.innerText = data.forecast.forecastday[0].astro.sunset
    airtext2.innerText = data.forecast.forecastday[0].hour[11].wind_kph + "/kph"
    humiditytext2.innerText = data.forecast.forecastday[0].hour[11].humidity + "%"




    sunday.innerText = data.forecast.forecastday[1].day.condition.text
    monday.innerText = data.forecast.forecastday[2].day.condition.text
    tuesday.innerText = data.forecast.forecastday[3].day.condition.text
    wedn.innerText = data.forecast.forecastday[4].day.condition.text
    thursday.innerText = data.forecast.forecastday[5].day.condition.text
    friday.innerText = data.forecast.forecastday[6].day.condition.text
    saturday.innerText = data.forecast.forecastday[7].day.condition.text



    sunImg.setAttribute("src", data.forecast.forecastday[1].day.condition.icon)
    monImg.setAttribute("src", data.forecast.forecastday[2].day.condition.icon)
    tueImg.setAttribute("src", data.forecast.forecastday[3].day.condition.icon)
    wedImg.setAttribute("src", data.forecast.forecastday[4].day.condition.icon)
    thuImg.setAttribute("src", data.forecast.forecastday[5].day.condition.icon)

    
    friImg.setAttribute("src", data.forecast.forecastday[6].day.condition.icon)
    satImg.setAttribute("src", data.forecast.forecastday[7].day.condition.icon)



    temp1.innerText = data.forecast.forecastday[1].hour[11].temp_c + "°"
    temp2.innerText = data.forecast.forecastday[2].hour[11].temp_c + "°"
    temp3.innerText = data.forecast.forecastday[3].hour[11].temp_c + "°"
    temp4.innerText = data.forecast.forecastday[4].hour[11].temp_c + "°"
    temp5.innerText = data.forecast.forecastday[5].hour[11].temp_c + "°"
    temp6.innerText = data.forecast.forecastday[6].hour[11].temp_c + "°"
    temp7.innerText = data.forecast.forecastday[7].hour[11].temp_c + "°"

    form.reset()

}







form.addEventListener("submit", getweather)
