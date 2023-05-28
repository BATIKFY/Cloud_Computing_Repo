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
    "batiks": [{
    "id": "STRING",
    "image": "STRING",
    "name": "STRING",
    "origin": "STRING",
    "meaning": "STRING",
    "createdAt": "DATE",
    "updatedAt": "DATE"
    }, ...
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
        "id": "STRING",
        "image": "STRING",
        "name": "STRING",
        "origin": "STRING",
        "meaning": "STRING",
        "createdAt": "DATE",
        "updatedAt": "DATE"
    }
  }
}
```
## Update Batik By ID
- Method : PUT
- Endpoint : `.../batik/:id`
- Respon Body :
```json 
{
      "status": 200,
      "success": true,
      "message": "batik updated",
      "data": {
        "batik": request body
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
      "blogs": [{
      "id": "STRING",
      "image": "STRING",
      "title": "STRING",
      "textBlog": "LONGTEXT",
      "SOURCE": "STRING",
      "createdAt": "DATE",
      "updatedAt": "DATE"
      }, ...
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
        "id": "STRING",
        "image": "STRING",
        "title": "STRING",
        "textBlog": "LONGTEXT",
        "SOURCE": "STRING",
        "createdAt": "DATE",
        "updatedAt": "DATE"
    }
  }
}
```
## Update Blog By ID
- Method : PUT
- Endpoint : `.../blog/:id`
- Respon Body :
```json 
{
      "status": 200,
      "success": true,
      "message": "blog updated",
      "data": {
        "blog": request body
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
      "username": "STRING",
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
         user,
        }
}
```
## Login User
- Method : POST
- Endpoint : `.../auth/login`
- Request Body : 
```json 
{
      "username": "STRING",
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
      "accessToken" : "token"
      }
}
```

