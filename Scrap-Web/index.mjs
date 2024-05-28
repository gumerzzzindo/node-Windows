import { chromium } from "playwright"

const browser = await chromium.launch (
    {headless : true}    
)
const page = await browser.newPage()
await page.goto('https://www.amazon.es/Docking-Station-NVMe-Enclosure-Adapter/dp/B0BLW1B85Q')
/* Quiero extraer a-price-whole de la clase del precio
    Con await page.$eval extraemos la clase del
*/
const precioTexto = await page.$eval('.a-price-whole', element => element.textContent.trim())
const precioFracion = await page.$eval('.a-price-fraction', element => element.textContent.trim())
const precio = precioTexto + (precioFracion)
const titulo = await page.$eval('.a-size-large .product-title-word-break', element => element.textContent.trim())
// Formatear precio
// const precioformateado = Number(precioTexto.toFixed(2))

// Objeto producto
const producto = {
    Titulo: titulo,
    Precio: precio
}


console.log(producto)