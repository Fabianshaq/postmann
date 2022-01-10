const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Programers!")  
})
 
app.get('/orang/:nama', (req,res)=>{
    var namaOrang = req.params.nama //menampilkan nama siswa
    res.end('Menampilkan nama siswa:'+namaOrang)
})
 
app.post('/orang', (req, res)=> {
    var namaOrang = req.body.nama //untuk menampilkan variabel nama
    var alamat = req.body.alamat //untuk menampilkan variabel alamat
    res.end('Menampilkan siswa baru, atas nama: '+namaOrang+', yang beralamat di '+alamat) //menampilkan nama siswa baru
})
 
app.delete('orang/:id', (req, res) => {
    var id = req.params.id //untuk menampilkan id
    var namaOrang = req.body.nama //untuk menampilkan nama
    res.end('ID'+id+' telah dihapus, atas nama '+namaOrang) //menampilkan id yang telah dihapus
});
 
app.put('orang/:id', (req, res) => {
    var id = req.params.id //menampilkan id
    var namaOrang = req.body.nama //menampilkan nama
    var alamat = req.body.alamat //menampilkan alamat
    res.end('Seseorang dengan ID'+id+', telah terupdate') //menampilkan data yang telah diupdate
});
 
app.listen(port, ()=> {            
    console.log(`Server di port ${port}`)
})
