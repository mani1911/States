

const pdfDownload = require('../downloadPdf.js')

const script =(num = '60', part = '46') =>{
    let siz = num.length
    let adder = ""
    for(let i=0; i<3-siz; i++){
        adder += "0"
    }
    num = adder + num
    adder = ""
    siz = part.length
    for(let i=0; i<4- siz; i++){
        adder += "0"
    }
    part = adder + part
    let URL = `https://ceomeghalaya.nic.in/erolls/pdf/english/A${num}/A${num}${part}.pdf`;
    pdfDownload(URL, '../', '/pdfs/English.pdf')
}

module.exports = script;