const os = require('node:os')
const { uptime } = require('node:process')
console.log(globalThis)
console.log('Sistema:', os.platform())
console.log('Arquitectura:', os.arch())
console.log('Tiempo de uso:',os.uptime() / 60 /60)