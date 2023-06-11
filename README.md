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
## Post Batik By ID
- Method : POST
- Endpoint : `.../batik`
- Request Body :
```json 
{
    "file": "FILE.jpg/jpeg",
    "name": "Batik Megamendung",
        "origin": "Cirebon",
        "meaning": "Motif Mega Mendung dalam batik memiliki pengaruh dari kultur Tiongkok dengan penggunaan perabotan berbahan keramik China ...",
}
```
- Respon Body :
```json 
{
    "status"  : 200,
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
    "status"  : 200,
    "succses" : true,
    "message" : 'new blog added',
    "data" : {
          "blog" : {
            "image": "FILE.jpg/jpeg",
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
# 3. USER

## Register User
- Method : POST
- Endpoint : `.../auth/register`
- Request Body :
```json 
{
      "name": "STRING",
      "email": "STRING","
      "password": STRING
}
```
- Response Body :
```json 
{
  "status"  : "201",
  "succses" : "true",
  "message" : "new user added",
  "data" : {
         user:{
             "name": "STRING",
              "email": "STRING",
              "password": "STRING"
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
      "email": "STRING",
      "password": "STRING"
}
```
- Response Body :
```json 
{
 "status":"200",
  "success": true,
  "message":"login successful",
  "data": {
      "id" : "STRING"
      "accessToken" : "token"
      }
}
```
## edit profile user
- Method : POST
- Endpoint : `.../auth/profile/:id`
- Request Body : 
```json 
{
      "name": "STRING",
      "email": "STRING"
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
            "name": "STRING",
            "email": "STRING"
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
      "password": "STRING"
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
          "password":"STRING",
        },
     }
}
```
}
