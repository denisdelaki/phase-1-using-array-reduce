const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const initial = 0;
// Code your solution here
let totalBatteries = batteryBatches.reduce((previous, current) => previous + current, initial);
  
