const pdfDownload = require('../downloadPdf.js')

const script =(num = '2', part = '1') =>{
    let URL = `https://ceomanipur.nic.in/SSR2022/CU2022/1-Khundrakpam/MotherRoll/English/Integrated/2/S14A${num}P${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/English.pdf')
}

module.exports = script;