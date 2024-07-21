// Ensure this matches the expected test array
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; 

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // This line is optional, just to verify the output

module.exports = {
  totalBatteries
};
