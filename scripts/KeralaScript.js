const pdfDownload = require('../downloadPdf.js')

const script =(num = '035', part = '2') =>{
    let URL = `http://www.ceo.kerala.gov.in/pdf/voterslist/2022/ML/AC${num}/S11A35P${part}.pdf?download=1ZNEMLBOUI%2F59Jkt0qxLAw%3D%3D`;
    pdfDownload(URL, '../', '/pdfs/Malayalam.pdf')
}

module.exports = script;