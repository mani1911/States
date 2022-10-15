const pdfDownload = require('../downloadPdf.js')

const script =(num = '6', part = '1') =>{
    let URL = `https://ceosikkim.nic.in/UploadedFiles/ElectoralRollPolling/S21A${num}P${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/English.pdf')
}

script();