const battery = 

document.querySelector('.battery_');

const level_bar =

battery.querySelector('span');

const charginT = document.querySelector('.battery_info .chargingTime');

const levelPercentage = document.querySelector('.battery_info .levelPercentage')

navigator.getBattery().then((battery)=>{

 

const info = battery 

const { charging, chargingTime, level} = info

 level_bar.style.width = `${level * 100}%`

 

 

levelPercentage.textContent = `Level : ${level * 100}%`

 if (charging) {

  

    level_bar.classList.add('charging');

    

 } else {

  level_bar.classList.remove('charging');

    

 }

 

})

 
