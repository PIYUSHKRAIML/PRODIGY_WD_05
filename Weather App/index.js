console.log("hello jee1");

const APIKEY = "1e58837f284e063cb3bc706ae386d2db";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent =  `${data?.main?.temp.toFixed(2)} F`

    document.body.appendChild(newPara);

}

async function showWeather(){

    try {
        let city = "delhi";
        // let lati = "15.29";
        // let long = "74.12";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);

        const data = await response.json();
        console.log("Weather data:-> " , data);
        renderWeatherInfo(data);
    }

    catch(err){
        //handle
    }

    
};