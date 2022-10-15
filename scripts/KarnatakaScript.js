const pdfDownload = require('../downloadPdf.js')

const script =(num, part) =>{
    let URL = `https://www.elections.tn.gov.in/SSR2022_MR_05012022/dt4/ac${num}/ac${num}${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/Kannada.pdf')
}

module.exports = script;