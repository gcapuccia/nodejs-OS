//.mjs se usa import, mientras que en js usamos required
import { userInfo, platform, release, arch, cpus, totalmem, freemem, uptime as _uptime } from 'node:os'

console.log('Informacion del sistema Operativo:')

console.log('------------------------------------------------------------------------')


console.log('Datos de Usuario: ', userInfo())
console.log('Nombre del sistema Operativo: ', platform())
console.log('Version del sistema operativo: ', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus())

function formatMemoryUsage(memory) {
    return (memory / (1024 ** 3)).toFixed(0) + ' GB';
  }
  
  console.log('Total Memory: ', formatMemoryUsage(totalmem()));
  console.log('Free Memory: ', formatMemoryUsage(freemem()));


console.log('------------------------------------------------------------------------')


function formatUptime(uptime) {
    const hours = String(Math.floor(uptime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((uptime % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(uptime % 60)).padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  }
  
  console.log('UPTIME: ', formatUptime(_uptime()));

