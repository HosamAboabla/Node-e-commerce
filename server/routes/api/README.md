# Routes


## Authentication
    1- Create new user:
        $ [POST] /api/auth/register
        body : {   
            "userName": "username",
            "email" : "email",
            "firstName" : "first name",
            "lastName" : "last name",
            "phoneNumber" : "phone number",
            "password" : "supser strong password",
        }

        response : {Message : `new user was created:`,Data: {}}
        Note : user access token will be stored in cookies
    2- Login:
        $ [POST] /api/auth/login
            body : {   
                "email" : "email",
                "password" : "supser strong password",
            }

            response : {Message : "success", Data: { }}
            Note : user access token will be stored in cookies

## Cart
    
    1- Create new cart item:
        Notes: 
            * Login required
            * For first cart item, this creates new cart

        $ [POST] /api/cartItems/create
        body : {   
            "product_id": "product id",
            "quantity" : 5,
        }

        response: 
            {
            Message : "created successfully",
            Data: cart
        }

    2- Update cart item:
        Notes: 
            * Login required
            * if quantity <= 0, cart item will be deleted

        $ [PUT] /api/cartItems/update
        body : {   
            "product_id": "product id",
            "quantity" : 3,
        }

        response:
            {
            Message : "updated successfully",
            Data: cart
        }
      
    3- Get all user carts:
        Notes: 
            * Login required

        $ [GET] /api/carts/list

        response:
            {
            Message : "success",
            Data: carts
        }

    3- Get all product items of current cart:
        Notes: 
            * Login required

        $ [GET] /api/cartItems/list

        response:
            {
            Message : "success",
            Data: cart items
        }


        
## Products
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

## Users
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