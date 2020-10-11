console.log("Weather Detector");

// Add Check Button using its id.
let checkbtn = document.getElementById('check');
// Add click event listener 
checkbtn.addEventListener('click', (e) => {
    // city name by input value put by user
    let city = document.getElementById('city');
    let cityName = "";
    cityName = city.value;
    console.log(cityName);
    // Async Function Starts for fetch data using API
    async function Data() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},india&appid=e41987015f689f0e1029a1ea883909b7`);
        const user = await response.json();
        return user;
    }
    let a = Data();
    a.then((data) => {
        let temp = data.main;
        let weather = data.weather[0];
        console.log(weather);
        let tempinCelsius = Math.round(temp["feels_like"] - 273);
        // console.log(tempinCelsius);
        // Print temperature and weather in DOM
        let showTemp = document.getElementById('showTemp');
        let showweather = document.getElementById('showweather');
        let tempIcon = document.getElementById('tempIcon');
        let showcityName = document.getElementById('cityName');
        if (cityName == "") {
            let alert =  document.getElementById('alert');
            alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>City Name!</strong> You not check temperature before put city name.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
            setTimeout(() => {
                alert.innerHTML = "";
              console.log("Tushar")
            }, 5000);
        }else{
            showcityName.innerHTML = cityName;
            showTemp.innerText = `${tempinCelsius}°C`;
            showweather.innerText = `${weather["main"]}`;
            if (weather["id"] < 250) {
                tempIcon.src = './icons/storm.svg';
            }
            else if (weather["id"] < 350) {
                tempIcon.src = './icons/drizzle.svg';
            }
            else if (weather["id"] < 550) {
                tempIcon.src = './icons/rain.svg';
            }
            else if (weather["id"] < 650) {
                tempIcon.src = './icons/snow.svg';
            }
            else if (weather["id"] < 800) {
                tempIcon.src = './icons/atmosphere.svg';
            }
            else if (weather["id"] == 800) {
                tempIcon.src = './icons/sun.svg';
            }
            else if (weather["id"] > 800) {
                tempIcon.src = './icons/clouds.svg';
            }
            
        }
    });
    city.value = "";
    e.preventDefault();
});

// let somecityname = ["Mumbai", "Delhi", "Kolkata", "Chennai"]
// for (const i of somecityname) {
//     console.log(i);
//     async function Data() {
//         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${i},india&appid=e41987015f689f0e1029a1ea883909b7`);
//         const user = await response.json();
//         return user;
//     }
//     let b = Data();
//     b.then((data) => {
//         let temp = data.main;
//         let tempinCelsius = Math.round(temp["feels_like"] - 273);
//         console.log(tempinCelsius);
//         let cards = document.getElementById('cards');
//         let HTML = "";
//         HTML = `<div class="card mr-2 card-bgcolor" style="width: 18rem;">
//         <img src="./icons/${somecityname[0]}.jpg" class="card-img-top" alt="...">
//         <div class="card-body">
//         <h2 class="text-center text-light">${somecityname[0]}</h2>
                     
//         </div>
//         </div><div class="card mr-2 card-bgcolor" style="width: 18rem;">
//         <img src="./icons/${somecityname[1]}.jpg" class="card-img-top" alt="...">
//         <div class="card-body">
//         <h2 class="text-center text-light">${somecityname[1]}</h2>
                       
//         </div>
//     </div><div class="card mr-2 card-bgcolor" style="width: 18rem;">
//     <img src="./icons/${somecityname[2]}.jpg" class="card-img-top" alt="...">
//     <div class="card-body">
//     <h2 class="text-center text-light">${somecityname[2]}</h2> 
                      
//         </div>
//         </div><div class="card mr-2 card-bgcolor" style="width: 18rem;">
//         <img src="./icons/${somecityname[3]}.jpg" class="card-img-top" alt="...">
//         <div class="card-body">
//         <h2 class="text-center text-light">${somecityname[3]}</h2>
                       
//         </div>
//     </div>`
//         cards.innerHTML = HTML;
//     })
// }

