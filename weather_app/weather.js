

let apikey="330e34c444f040b0bab89ce8b5e804be"
// let apikey='ee1143b023b769119ff30b015c0ede31'

   let btn=document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#input").value 
    console.log(input);
    weather(input)
    
   })

   async function weather(data){
   let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apikey}&units=metric`)
   let weather_url=await url.json()
   display_data(weather_url)
    
   }

   display_data=(arr)=>{
    let cloud=document.querySelector("#cloud").innerHTML=arr.weather[0].description
    let city_name=document.querySelector("#city").innerHTML=arr.name
    let humidity=document.querySelector("#humidity").innerHTML=arr.main.humidity+"%"
    let temp=document.querySelector("#temp").innerHTML=arr.main.temp+"°C"
    let wind=document.querySelector("#wind").innerHTML=arr.wind.speed+" km"
    let feels_like=document.querySelector("#feels_like").innerHTML=arr.main.feels_like+"°"
   }