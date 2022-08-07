// https://calculator.swiftutors.com/absolute-pressure-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const absolutePressureRadio = document.getElementById('absolutePressureRadio');
const atmosphericPressureRadio = document.getElementById('atmosphericPressureRadio');
const gaugePressureRadio = document.getElementById('gaugePressureRadio');

let absolutePressure;
let atmosphericPressure = v1;
let gaugePressure = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

absolutePressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Atmospheric Pressure';
  variable2.textContent = 'Gauge Pressure';
  atmosphericPressure = v1;
  gaugePressure = v2;
  result.textContent = '';
});

atmosphericPressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute Pressure';
  variable2.textContent = 'Gauge Pressure';
  absolutePressure = v1;
  gaugePressure = v2;
  result.textContent = '';
});

gaugePressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute Pressure';
  variable2.textContent = 'Atmospheric Pressure';
  absolutePressure = v1;
  atmosphericPressure = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(absolutePressureRadio.checked)
    result.textContent = `Absolute Pressure = ${computeAbsolutePressure().toFixed(2)}`;

  else if(atmosphericPressureRadio.checked)
    result.textContent = `Atmospheric Pressure = ${computeAtmosphericPressure().toFixed(2)}`;

  else if(gaugePressureRadio.checked)
    result.textContent = `Gauge Pressure = ${computeGaugePressure().toFixed(2)}`;
})

// calculation

function computeAbsolutePressure() {
  return Number(gaugePressure.value) + Number(atmosphericPressure.value);
}

function computeAtmosphericPressure() {
  return Number(absolutePressure.value) - Number(gaugePressure.value);
}

function computeGaugePressure() {
  return Number(absolutePressure.value) - Number(atmosphericPressure.value);
}