# API Documentation / Spec
# 1. BATIK
## Get All Batik
- Method : GET
- Endpoint : `.../batik`
- Respon Body :
```json 
{
  "status": 200,
  "success": true,
  "message": "ok",
  "data": {
    "batiks": [
      {
        "id": "5K4FCRjHvg",
        "image": "https://storage.googleapis.com/batikfy-bucket/megmen.png",
        "name": "Batik Megamendung",
        "origin": "Cirebon",
        "meaning": "Motif Mega Mendung dalam batik memiliki pengaruh dari kultur Tiongkok dengan ...",
        "createdAt": "2023-06-06T12:14:17.000Z",
        "updatedAt": "2023-06-06T12:14:17.000Z"
      },
      {
        "id": "A8Mw6oINhr",
        "image": "https://storage.googleapis.com/batikfy-bucket/sekar.jpg",
        "name": "Batik Sekar",
        "origin": "Solo dan Yogyakarta",
        "meaning": "Batik Sekar Jagad adalah salah satu motif batik yang berasal dari Solo dan Yogyakarta ...",
        "createdAt": "2023-05-31T03:45:53.000Z",
        "updatedAt": "2023-05-31T03:45:53.000Z"
      },
    ]
  }
}
```
## Get Batik By ID
- Method : GET
- Endpoint : `.../batik/:id`
- Respon Body :
```json 
{
  "status": 200,
  "success": true,
  "message": "batik find",
  "data": {
    "batik": {
        "id": "5K4FCRjHvg",
        "image": "https://storage.googleapis.com/batikfy-bucket/megmen.png",
        "name": "Batik Megamendung",
        "origin": "Cirebon",
        "meaning": "Motif Mega Mendung dalam batik memiliki pengaruh dari kultur Tiongkok dengan ...",
        "createdAt": "2023-06-06T12:14:17.000Z",
        "updatedAt": "2023-06-06T12:14:17.000Z"
      }
  }
}
```
## Get Batik By Keyword 
- Method : GET
- Endpoint : `.../batik/name/{keyword}`
- example endpoint : `.../batik/name/batik pekalongan` atau `.../batik/name/pekalongan `
- Request Body :
```json 
{
    "status"  : 200,
    "succses" : true,
    "message" : 'batik find',
    "data" : {
          "batik" : {
            "id": "5K4FCRjHvg",
            "image": "https://storage.googleapis.com/batikfy-bucket/megmen.png",
            "name": "Batik Pekalongan",
            "origin": "Cirebon",
            "meaning": "Motif Mega Mendung dalam batik memiliki pengaruh dari kultur Tiongkok dengan ...",
            "createdAt": "2023-06-06T12:14:17.000Z",
            "updatedAt": "2023-06-06T12:14:17.000Z"
          }
     }
}
```
## Post Batik
- Method : POST
- Endpoint : `.../batik`
- Respon Body :

```json 
{
    "status"  : 201,
    "succses" : true,
    "message" : 'new batik added',
    "data" : {
          "batik" : {
            "id": "5K4FCRjHvg",
            "image": "https://storage.googleapis.com/batikfy-bucket/megmen.png",
            "name": "Batik Megamendung",
            "origin": "Cirebon",
            "meaning": "Motif Mega Mendung dalam batik memiliki pengaruh dari kultur Tiongkok dengan ...",
            "createdAt": "2023-06-06T12:14:17.000Z",
            "updatedAt": "2023-06-06T12:14:17.000Z"
          }
     }
}
```
## Delete Batik By ID
- Method : DELETE
- Endpoint : `.../batik/:id`
- Respon Body :
```json 
{
      "status": 200,
      "success": false,
      "message": "batik deleted successfully"
}
```

# 2. BLOG

## Get All Blog
- Method : GET
- Endpoint : `.../blog`
- Respon Body :
```json 
{
  "status": 200,
  "success": true,
  "message": "ok",
  "data": {
      "blog": [
         {
        "id": "3q8K4znz-m",
        "image": "https://storage.googleapis.com/batikfy-bucket/artikel1.jpg",
        "title": "Praktik Soft Diplomacy Indonesia Melalui Batik",
        "textBlog": "Indonesia adalah negara yang kaya akan keberagaman, baik dari segi budaya, kepercayaan dan latar belakang masyarakat yang berbeda-beda. Indonesia ...",
        "source": "https://kumparan.com/angelina-eugene/praktik-soft-diplomacy-indonesia-melalui-batik-20PqFKWamPk",
        "createdAt": "2023-05-31T03:57:56.000Z",
        "updatedAt": "2023-05-31T03:57:56.000Z"
      },
      {
        "id": "OzBDPjSLDx",
        "image": "https://storage.googleapis.com/batikfy-bucket/artikel2.jpg",
        "title": "Batik Kian Diakui Sebagai Aset Mewah yang Berharga",
        "textBlog": "Tak hanya cantik untuk dipakai sebagai penunjang penampilan, batik pun memiliki valuasi tinggi sebagai aset investasi ... ",
        "source": "https://investasi.kontan.co.id/news/batik-kian-diakui-sebagai-aset-mewah-yang-berharga",
        "createdAt": "2023-06-06T12:37:13.000Z",
        "updatedAt": "2023-06-06T12:37:13.000Z"
      },
      ]
  }
}
```
## Get Blog By ID
- Method : GET
- Endpoint : `.../blog/:id`
- Respon Body :
```json 
{
  "status": 200,
  "success": true,
  "message": "blog find",
  "data": {
    "blog": {
         "id": "OzBDPjSLDx",
        "image": "https://storage.googleapis.com/batikfy-bucket/artikel2.jpg",
        "title": "Batik Kian Diakui Sebagai Aset Mewah yang Berharga",
        "textBlog": "Tak hanya cantik untuk dipakai sebagai penunjang penampilan, batik pun memiliki valuasi tinggi sebagai aset investasi ... ",
        "source": "https://investasi.kontan.co.id/news/batik-kian-diakui-sebagai-aset-mewah-yang-berharga",
        "createdAt": "2023-06-06T12:37:13.000Z",
        "updatedAt": "2023-06-06T12:37:13.000Z"
    }
  }
}
```
## Update Blog By ID
- Method : PUT
- Endpoint : `.../blog/:id`
- Request Body : 
```json
{
  "image": "FILE.jpg/jpeg",
   "title": "Batik Kian Diakui Sebagai Aset Mewah yang Berharga",
   "textBlog": "Tak hanya cantik untuk dipakai sebagai penunjang penampilan, batik pun memiliki valuasi tinggi sebagai aset investasi ... ",
   "source": "https://investasi.kontan.co.id/news/batik-kian-diakui-sebagai-aset-mewah-yang-berharga",
}
```
- Respon Body :
```json 
{
      "status": 200,
      "success": true,
      "message": "blog updated",
      "data": {
        "blog": {
          "image": "FILE.jpg/jpeg",
          "title": "Batik Kian Diakui Sebagai Aset Mewah yang Berharga",
          "textBlog": "Tak hanya cantik untuk dipakai sebagai penunjang penampilan, batik pun memiliki valuasi tinggi sebagai aset investasi ... ",
          "source": "https://investasi.kontan.co.id/news/batik-kian-diakui-sebagai-aset-mewah-yang-berharga",,
        }
      }
}
```
## Post Blog
- Method : POST
- Endpoint : `.../blog`
- Request Body :
```json 
{
    "image": "FILE.jpg/jpeg",
    "title": "Batik Kian Diakui Sebagai Aset Mewah yang Berharga",
    "textBlog": "Tak hanya cantik untuk dipakai sebagai penunjang penampilan, batik pun memiliki valuasi tinggi sebagai aset investasi ... ",
    "source": "https://investasi.kontan.co.id/news/batik-kian-diakui-sebagai-aset-mewah-yang-berharga", 
}
```
- Respon Body :
```json 
{
    "status"  : 201,
    "succses" : true,
    "message" : 'new blog added',
    "data" : {
          "blog" : {
            "image": "https://storage.googleapis.com/batikfy-bucket/nadia.jpeg",
            "title": "Batik Kian Diakui Sebagai Aset Mewah yang Berharga",
            "textBlog": "Tak hanya cantik untuk dipakai sebagai penunjang penampilan, batik pun memiliki valuasi tinggi sebagai aset investasi ... ",
            "source": "https://investasi.kontan.co.id/news/batik-kian-diakui-sebagai-aset-mewah-yang-berharga",
          }
     }
}
```
## Delete Blog By ID
- Method : DELETE
- Endpoint : `.../blog/:id`
- Respon Body :
```json 
{
      "status": 200,
      "success": false,
      "message": "blog deleted successfully"
}
```
## Get Blog By Keyword 
- Method : GET
- Endpoint : `.../blog/find/{keyword}`
- example endpoint : `.../blog/find/mahasiswa`
- Request Body :
```json 
{
    "status"  : 200,
    "succses" : true,
    "message" : 'blog find',
    "data" : {
      "blog": [
            {
                "id": "JjHp5T0Pc_",
                "image": "https://storage.googleapis.com/batikfy-bucket/nadia.jpeg",
                "title": "Keren! Mahasiswa Unair Kenalkan Batik Indonesia di Italia",
                "textBlog": "Aksi yang dilakukan mahasiswa ...",
                "createdAt": "2023-06-11T12:36:53.000Z",
                "updatedAt": "2023-06-11T12:36:53.000Z"
            }
        ]
     }
}
```
# 3. USER

## Register User
- Method : POST
- Endpoint : `.../auth/register`
- Request Body :
```json 
{
      "name": "DaffaRadhitya",
      "email": "daffasven@gmail.com",
      "password": "Daffa123"
}
```
- Response Body :
```json 
{
  "status"  : "201",
  "succses" : "true",
  "message" : "new user added",
  "data" : {
         "user":{
          "name": "DaffaRadhitya",
          "email": "daffasven@gmail.com",
          "password": "Daffa123"
         }
        }
}
```
## Login User
- Method : POST
- Endpoint : `.../auth/login`
- Request Body : 
```json 
{
      "email": "daffasven@gmail.com",
      "password": "Daffa123"
}
```
- Response Body :
```json 
{
 "status":"200",
  "success": true,
  "message":"login successful",
  "data": {
      "id": "Hb4nzOi344",
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX..."
      }
}
```
## edit profile user
- Method : POST
- Endpoint : `.../auth/profile/:id`
- Request Body : 
```json 
{
      "name": "DaffaRadhitya11",
      "email": "dafafasven@gmail.com",
}
```
- Response Body :
```json 
{
 "status": "200",
 "success": "true",
 "message": "user updated",
   "data": {
        "user": {
          "name": "DaffaRadhitya11",
          "email": "dafafasven@gmail.com",
        },
     }
}
```
}
## forget password
- Method : POST
- Endpoint : `.../auth/password/:id`
- Request Body : 
```json 
{
      "password": "passBaru"
}
```
- Response Body :
```json 
{
 "status": "200",
 "success": "true",
 "message": "user updated",
   "data": {
        "user": {
          "password":"passBaru",
        },
     }
}
```
}
