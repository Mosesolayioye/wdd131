// Footer - Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Footer - Last Modified Date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Wind Chill Calculation
function calculateWindChill(temperature, windSpeed) {
    // Metric formula (°C and km/h)
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Static values (matching the HTML)
const temperature = 28; // °C
const windSpeed = 12;   // km/h

// Conditions for metric: Temp <= 10°C AND Wind > 4.8 km/h
const windChillElement = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}°C`;
} else {
    windChillElement.textContent = "N/A";
}