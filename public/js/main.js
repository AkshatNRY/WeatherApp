const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_status = document.getElementById('temp_status'); 
const temp_real_val = document.getElementById('temp_real_val');
const day = document.getElementById('day');
const today_data = document.getElementById('today_data');
const dataHide = document.querySelector('.middle_layer');
const date = new Date();

const getInfo = async(event) => {
    event.preventDefault(); 
   let cityVal = cityName.value;
   if(cityVal === ""){
       city_name.innerHTML = "Please Enter City";
       dataHide.classList.add('data_hide');
   }else{
       try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b8bd4562cbfb01c2774a627dea979942#`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        const temperature = (arrData[0].main.temp - 273.15).toFixed(1);
        temp_real_val.innerText =  temperature;
        temp_status.innerText = arrData[0].weather[0].main;
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        dataHide.classList.remove('data_hide');

        
       } catch (error) {
        city_name.innerHTML = "Please Enter A Valid City";
        dataHide.classList.add('data_hide');
       }

    }
};

submitBtn.addEventListener('click', getInfo);