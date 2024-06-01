import { chromium } from 'playwright';

(async () => {
    // Iniciar el navegador
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Navegar a la página de distrowatch
    await page.goto('https://distrowatch.com/dwres.php?resource=major');
    
    // Extraer las distribuciones más usadas
    const distributions = await page.$$eval('.NewsItem', elements => {
        return elements.map(element => {
            const nameElement = element.querySelector('.NewsHeadline');
            return nameElement ? nameElement.textContent.trim() : null;
        }).filter(name => name !== null); // Filtrar nulos
    });

    // Formatear el resultado
    const formattedDistributions = distributions.map((name, index) => `distro${index + 1}: ${name}`);
    
    // Mostrar en consola
    formattedDistributions.forEach(distributions => console.log(distributions));
    
    // Cerrar el navegador
    await browser.close();
})();