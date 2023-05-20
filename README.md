# API Documentation / Spec
# 1. BATIK
## Get All User
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