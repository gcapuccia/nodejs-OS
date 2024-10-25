const os = require('node:os')

console.log('Informacion del sistema Operativo:')

console.log('------------------------------------------------------------------------')


console.log('Datos de Usuario: ', os.userInfo())
console.log('Nombre del sistema Operativo: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())

function formatMemoryUsage(memory) {
    return (memory / (1024 ** 3)).toFixed(0) + ' GB';
  }
  
  console.log('Total Memory: ', formatMemoryUsage(os.totalmem()));
  console.log('Free Memory: ', formatMemoryUsage(os.freemem()));


console.log('------------------------------------------------------------------------')


function formatUptime(uptime) {
    const hours = String(Math.floor(uptime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((uptime % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(uptime % 60)).padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  }
  
  console.log('UPTIME: ', formatUptime(os.uptime()));

