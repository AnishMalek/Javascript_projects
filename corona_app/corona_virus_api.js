
//global


async function global_data() {
    let global_url = await fetch(`https://disease.sh/v3/covid-19/all`)
    let global_url1 = await global_url.json()

    display_data_globally(global_url1)
}


function display_data_globally(arr1) {

    // <------country wise------>

    let total_cases = document.querySelector(".total_cases")
    total_cases.innerHTML = arr1.cases


    let Active = document.querySelector(".active_cases")
    Active.innerHTML = arr1.active


    let recovered = document.querySelector(".recovered")
    recovered.innerHTML = arr1.recovered



    let deaths = document.querySelector(".deaths")
    deaths.innerHTML = arr1.deaths



}

global_data();







let search_btn = document.querySelector("#search_btn")



search_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let search_value = document.querySelector("#search_input").value
    corona(search_value)

})


async function corona(data) {
    let url = await fetch(`https://disease.sh/v3/covid-19/countries/${data}`)
    let corona_api = await url.json()


    display_data(corona_api)

}

function display_data(arr) {

    // <------country wise------>
   let country_img=document.querySelector("#country_img")
   country_img.src=arr.countryInfo.flag

    let country = document.querySelector("#country")
    country.innerHTML = arr.country


    let total_cases1 = document.querySelector(".total_cases1")
    total_cases1.innerHTML = arr.cases


    let Active1 = document.querySelector(".active_cases1")
    Active1.innerHTML = arr.active



    let recovered1 = document.querySelector(".recovered1")
    recovered1.innerHTML = arr.recovered



    let deaths1 = document.querySelector(".deaths1")
    deaths1.innerHTML = arr.deaths

}

