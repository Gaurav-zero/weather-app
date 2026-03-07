function getWeatherInfo(place){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=KP6LHJGX8ULYS5GWJLUZA5RGP`)
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
      })
      .catch(err => alert(err));
}

export {getWeatherInfo};