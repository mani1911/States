const pdfDownload = require('../downloadPdf.js')

const script =(num = '9', part = '7') =>{
    let URL = `https://ceo.nagaland.gov.in/Downloads/FinalRoll2022/9/S17A${num}P${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/English.pdf')
}

module.exports = script;