import APIKEY from "./key.js";

// tab containers all {
const tabContainer = document.querySelector('[tab_container]');
const yourWeather = document.querySelector('[show_yourWeather]');
const searchWeather = document.querySelector(`[show_searchedWeather]`);
// }

// user info container all{ 
const userContainer = document.querySelector(`[Data_userInfo]`);
    // grant location container 
    const grantLocationContainer = document.querySelector(`[grantAccess]`);
    const accessBtn = document.querySelector(`[btnAccess]`);
    // search Location Container all {
    const searchLocationContainer = document.querySelector(`.searchLoaction`);
    const searchInput = document.querySelector(`[input_search]`);
    // }

    // loading continer 
    const loadingContainer = document.querySelector(`.loadingContainer`);

    // weather Info container all{
    const weatherInfoContainer = document.querySelector(`[data_weatherInfo]`);
        const cityName = document.querySelector('[data_cityName]');
        const countryFlag = document.querySelector(`[country_flag]`);

        const weatherDesc = document.querySelector(`[data_weatherDesc]`);
        const weatherImg = document.querySelector(`.weatherDescImg`);
        const Temperature = document.querySelector(`[data_weatherTemp]`);

        const windSpeed = document.querySelector(`[data_windSpeed]`);
        const humidity = document.querySelector(`[data_humidity]`);
        const cloudCover = document.querySelector(`[data_cloudCover]`);
    // }

// } 

let currentTab = yourWeather;
currentTab.classList.add(`current-tab`);  



if(!sessionStorage.getItem('localCordinates')){
    grantLocationContainer.classList.add(`active`);
}
else{

    check_localCordinates();

}


function updateUI(weatherData){
    cityName.innerText = weatherData?.name;
    countryFlag.src =`https://flagsapi.com/${weatherData?.sys?.country}/flat/64.png`;

    weatherDesc.innerText = weatherData?.weather[0]?.description;
    weatherImg.src = `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png` ;

    Temperature.innerText = weatherData?.main?.temp + ` °C`;
    
    windSpeed.innerText =   weatherData?.wind?.speed + " km/h ";
    humidity.innerText = weatherData?.main?.humidity + " %";
    cloudCover.innerText = weatherData?.clouds?.all + " %";

}





function check_localCordinates(){

                let localCordinates = JSON.parse(sessionStorage.getItem("localCordinates"));

                if(localCordinates){
                    loadingContainer.classList.add(`active`);
                    fetchWeather(localCordinates);
                }
                else{
                    grantLocationContainer.classList.add(`active`);
                    weatherInfoContainer.classList.remove(`active`);
                }

            }

async function fetchWeather(localCordinates){

    try{

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${localCordinates.latitude}&lon=${localCordinates.longitude}&appid=${APIKEY}&units=metric`);
    
        let data = await response.json();

        updateUI(data);
        loadingContainer.classList.remove(`active`);
        weatherInfoContainer.classList.add(`active`);

    }
    catch(error){
        console.log(error);
        weatherInfoContainer.classList.remove(`active`);

    }

    



}


// function to switch tab

function switchTab(clickedTab){

    if(clickedTab != currentTab){

        currentTab.classList.remove(`current-tab`);
        currentTab = clickedTab;
        currentTab.classList.add(`current-tab`);

        if(!searchLocationContainer.classList.contains(`active`)){
            weatherInfoContainer.classList.remove(`active`);
            grantLocationContainer.classList.remove(`active`);
            searchLocationContainer.classList.add(`active`);
        }
        else{

            weatherInfoContainer.classList.remove(`active`);
            searchLocationContainer.classList.remove('active');
            check_localCordinates();


        }


    }
    else{
        return;
    }

}




yourWeather.addEventListener('click' ,()=>{
    switchTab(yourWeather)
});

searchWeather.addEventListener('click' ,()=>{
    switchTab(searchWeather);
});





function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function get_localCordinates() {
    try {
        // Now we can actually await the result!
        const position = await getPosition();
        
        const Cordinates = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
        };

        let localCordinates = JSON.stringify(Cordinates);

        sessionStorage.setItem('localCordinates' , localCordinates);

    } catch (err) {
        console.error("Error getting location:", err.message);
        alert("Sorry, no position available.");
        weatherInfoContainer.classList.remove(`active`);
    }
}


accessBtn.addEventListener('click',()=>{
    grantLocationContainer.classList.remove(`active`);
    get_localCordinates();
    check_localCordinates();


} )


async function fetchWeatherDataByCityName(cityName){


    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`);

        let weatherData = await response.json();

        updateUI(weatherData);

        loadingContainer.classList.remove(`active`);

        weatherInfoContainer.classList.add(`active`);
        
    } catch (error) {

        console.log(error);
        weatherInfoContainer.classList.remove(`active`);
        
    }

    

}


searchLocationContainer.addEventListener('submit' , (event)=>{

    event.preventDefault();
    try {
        weatherInfoContainer.classList.remove(`active`);
        loadingContainer.classList.add('active');
        let cityName = searchInput.value.trim();
        // console.log(cityName);
        if (cityName) {
            fetchWeatherDataByCityName(cityName);
        }
        
    } catch (error) {

        console.log(error);
        weatherInfoContainer.classList.remove(`active`);
        
    }

})

