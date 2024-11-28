const os = require('os');
/* 
Uptime is a measurement of system reliability and stability.
It indicates how long a system or service has been operational.
If your system uptime is 5 hours, it means your computer or server has been running continuously for the last 5 hours without a reboot.
*/

const upTimeInHours = ((os.uptime()/3600).toFixed(2));
console.log(`System's uptime: ${upTimeInHours}`);
const freeMemoryInGB = (os.freemem() / (1024 ** 3)).toFixed(2);
if(freeMemoryInGB > 1){
    console.log(`Free memory is sufficient: ${freeMemoryInGB} GB available.`);
} else {
    console.log(`Free memory is low: Only ${freeMemoryInGB} GB available.`);
}
