# Manajemen Basis Data  - Kelompok 7 [CouchDB]
![Anggota Kelompok](https://raw.githubusercontent.com/Gaduh-Hartawan/kelompok7-couchdb-uas/master/Dokumentasi/PPT%20CouchDB%20-%20Kel7.jpg)
 
## How To Use
Di dalam directory project jalankan command berikut
 
### `npm install`
Command tersebut diperlukan untuk mengintall module atau package npm.

### `npm start`

Command untuk menjalankan aplikasi.\
Buka [http://localhost:3000](http://localhost:3000) untuk dapat mengakses aplikasi pada browser.

### Tampilan Awal
![TampilanAwal](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/TampilanAwal.png)

### Tambah Data
![TambahData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/TambahData1.png)
Isi Form Pada Table lalu klik Button + untuk menambah Data

![TambahData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/TambahData2.png)
Data berhasil Ditambahkan, untuk Clear Form tekan Button pada setelah button +

### Update Data
![UpdateData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/UpdateData1.png)
Klik button edit.

![UpdateData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/UpdateData2.png)
Edit data pada form, kemudian klik button centang untuk submit.

![UpdateData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/UpdateData3.png)
Data berhasil di update.

### Delete Data
![DeletData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/DeleteData1.png)
Klik button tong sampah pada data yang ingin dihapus

![DeletData](https://github.com/Gaduh-Hartawan/kelompok7-couchdb-uas/blob/master/Dokumentasi/DeleteData2.png)
Data berhasil dihapus

## API Endpoint

`http://couchdb_host:5984/db_name/document_id/`\
\
`http://couchdb_host:5984/db_name/mongo_query/`

Diatas adalah struktur dasar penggunaan API pada couchdb.

## Contoh API yang Digunakan
### Create Database
**PUT** `http://localhost:5984/mahasiswas`
### Insert Data
**PUT** `http://localhost:5984/mahasiswas/1/`\
Request Body :
```json
{
  "nim": "1207050033",
  "nama": "Eneng Raysa Bunga Rizkya",
  "email": "eneng@mail.com",
  "telp": "081264768461"
}
```
### Read Data
**POST** `http://localhost:5984/mahasiswas/_find`\
Request Body :
```json
{
   "selector": {
      "_id": {
         "$gt": null
      }
   }
}
```
### Read Data by ID
**GET** `http://localhost:5984/mahasiswas/2/`
### Update Data
**PUT** `http://localhost:5984/mahasiswas/2/`\
Request Body :
```json
{
  "_rev" : "1-5d8715c372003e721f0784db3dc85c02",
  "nim": "1207050041",
  "nama": "Frinaldi M Syauqi",
  "email": "frinaldi@mail.com",
  "telp": "089518928586"
}
```
### Delete Data
**DELETE** `http://localhost:5984/mahasiswas/2/?rev=1-5d8715c372003e721f0784db3dc85c02`
### Delete Database
**DELETE** `http://localhost:5984/mahasiswas`
