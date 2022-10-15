const fs = require('fs')
const open = require('fs/promises')

fs.readFile('./pdfs/English.pdf', async (err, data)=>{
    try{
        console.log(data)
    }
    catch(e){
        console.log(e.message)
    }
})
