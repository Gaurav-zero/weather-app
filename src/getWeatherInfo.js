function getWeatherInfo(place){
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=KP6LHJGX8ULYS5GWJLUZA5RGP`)
      .then((response) =>{
        if(response.ok){
            return(response.json());
        }
        else{
            throw new Error("error in fetching!!!");
        }
      })
      .then((response)=>{
        console.log(response);
        return {
            address: response.address, 
            description: response.description, 
            latitude: response.latitude,
            longitude: response.longitude, 
            condition: response.currentConditions.conditions,
            humidity: response.currentConditions.humidity,
            temperature: response.currentConditions.temp,  
            windspeed: response.currentConditions.windspeed,  
        }
      })
      .catch(err => console.log(err));
}

export {getWeatherInfo};