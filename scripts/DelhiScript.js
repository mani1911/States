const pdfDownload = require('../downloadPdf.js')

const script =(num = '40', part = '9') =>{
    let URL = `https://ceodelhi.gov.in/engdata/AC${num}/U05A${num}P${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/English.pdf')
}

script()