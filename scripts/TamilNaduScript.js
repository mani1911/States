const pdfDownload = require('../downloadPdf.js')

const script =(num = '40', part = '100') =>{
    let siz = num.length
    let adder = ""
    for(let i=0; i<3-siz; i++){
        adder += "0"
    }
    num = adder + num
    adder = ""
    siz = part.length
    for(let i=0; i<3- siz; i++){
        adder += "0"
    }
    part = adder + part
    let URL = `https://www.elections.tn.gov.in/SSR2022_MR_05012022/dt4/ac${num}/ac${num}${part}.pdf`;
    pdfDownload(URL, '../', 'pdfs/Tamil.pdf')
}

script();



