# Routes

## User
    1- Get all users:
        $ [GET] /api/user/list/
    2- Get specific user:
        $ [GET] /api/user/list/user_id
    3- Create new user:
        $ [POST] /api/user/create/
        body : {
            "email": "email@yahoo.com",
            "firstName": "first_name",
            "lastName": "last_name",
            "isAdmin": true,
            "password": "strong_password"
        }
    
    4- Update user:
        $ [PUT] /api/user/update/user_id
        body : {
            "email": "updated_email@yahoo.com",
            "firstName": "updated_first_name",
            "lastName": "updated_last_name",
            "isAdmin": false,
            "password": "updated_strong_password"
        }
    5- Delete user:
        $ [DELETE] /api/user/delete/user_id