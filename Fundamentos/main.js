const os = require('node:os')
console.log(globalThis)
console.log('Sistema:', os.platform())
console.log('Arquitectura:', os.arch())