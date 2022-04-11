# Routes

## User
    1- Get all products:
        $ [GET] /api/products/list/
    2- Get specific product:
        $ [GET] /api/products/list/product_id
    3- Create new product:
        $ [POST] /api/products/create/
        body : {   
            "name": "product_name",
            "description" : "product_description",
            "image" : "product_image_url",
            "quantity" : product_quantity,
            "price" : product_price,
            "size" : product_size,
            "color" : "product_color"
        }
    
    4- Update product:
        $ [PUT] /api/products/update/product_id
        body : {   
            "name": "updated_product_name",
            "description" : "updated_product_description",
            "image" : "updated_product_image_url",
            "quantity" : updated_product_quantity,
            "price" : updated_product_price,
            "size" : updated_product_size,
            "color" : "updated_product_color"
        }
    5- Delete product:
        $ [DELETE] /api/products/delete/user_id

## User
    1- Get all users:
        $ [GET] /api/users/list/
    2- Get specific user:
        $ [GET] /api/users/list/user_id
    3- Create new user:
        $ [POST] /api/users/create/
        body : {
            "email": "email@yahoo.com",
            "firstName": "first_name",
            "lastName": "last_name",
            "isAdmin": true,
            "password": "strong_password"
        }
    
    4- Update user:
        $ [PUT] /api/users/update/user_id
        body : {
            "email": "updated_email@yahoo.com",
            "firstName": "updated_first_name",
            "lastName": "updated_last_name",
            "isAdmin": false,
            "password": "updated_strong_password"
        }
    5- Delete user:
        $ [DELETE] /api/users/delete/user_id