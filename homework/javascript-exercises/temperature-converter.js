// 1. Create a function called temperatureConverter
// 2. The function should take in one parameter called Fahrenheit
// 3. The function should return the temperature in Celsius using the following formula: 
           /* Celsius = (Fahrenheit - 32) × 5/9 */
// 4. Try console logging the function with different numbers as parameters

function temperatureConverter(Fahrenheit) {
let celsius = (Fahrenheit - 32) * 5/9;
return celsius;
}
temperatureConverter(25);
// result -3.888888888888889
