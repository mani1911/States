const pdfDownload = require('../downloadPdf.js')

const script =(num = '4', part = '5') =>{
    let URL = `https://ceogoa.nic.in/PDF/EROLL/MOTHERROLL/2021/${num}/S05A${num}P${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/English.pdf')
}

module.exports = script;