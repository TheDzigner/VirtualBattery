const battery = document.querySelector('.battery_');

const level_bar = battery.querySelector('span');

const charginT = document.querySelector('.battery_info .chargingTime');

const levelPercentage = document.querySelector('.battery_info .levelPercentage');

navigator.getBattery().then((battery) => {

  const updateChargingStatus = () => {

    if (battery.charging) {

      level_bar.classList.add('charging');

      charginT.textContent = 'Charge Connected'

    } else {

      level_bar.classList.remove('charging');

      charginT.textContent = "Not Charging";

    }

  };

  battery.addEventListener('chargingchange', updateChargingStatus);

  

  const updateBatteryInfo = () => {

    const { charging, level } = battery;

    level_bar.style.width = `${level * 100}%`;

    levelPercentage.textContent = `${level * 100}%  Available`;

    updateChargingStatus();

  };

  updateBatteryInfo();

});

 
