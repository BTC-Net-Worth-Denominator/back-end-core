# <p>Backend For BTC Net Worth Application</P>

## <p>Backend Deploy: https://btc-net-worth.herokuapp.com/</p>

## REGISTER and LOGIN ENDPOINTS

### `[POST] /api/auth/register`

- Request Body:
  - _username required (must be unique)_
  - _password required_

_What You Send_

```json
{
  "username": "john",
  "password": "12345"
}
```

_Server Response_

```json
{
  "message": "Successfully registered john.",
  "user_id": 1
}
```

### `[POST] /api/auth/login`

- Request Body:
  - _username required_
  - _password required_

_What You Send_

```json
{
  "username": "john",
  "password": "12345"
}
```

_Server Response_

```json
{
  "message": "Welcome john",
  "token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTY0NjMyNjE1NCwiZXhwIjoxNjQ2NDEyNTU0fQ.-J1wwMHT_H8C1CixAyoc0NFGQmTtvgr_yGDBK8dEZWs`
}
```

<p>You will use the token given by the server for authentication.</p>
<p>User ID should also be stored as this will be required in the header when adding items.</p>

<p>Sample Credentials you can use for login testing:</p>

- `username: admin, password: 1234`
- `username: bob, password: bob`

### `[GET] /api/users`

- Returns all users in database, currently public facing but will be restricted.

_Server Response_

```json
{
  "user_id": "1",
  "username": "admin",
},
{
  "user_id": "2",
  "username": "peter",
}
"etc..."
```

### `[GET] /api/users/:user_id`

- Returns user by their ID currently in database, currently public facing but will be restricted.

_Server Response_

```json
{
  "user_id": "1",
  "username": "admin",
}
"etc..."
```

## ASSET & PORTFOLIO ENDPOINTS

### `[GET] /api/portfolio/`

**_RESTRICTED ENDPOINT_** (token required)

- Returns array of all assets in a portfolio for that specific user in the database.

_Server Response_

```json
[   {
        "asset_name": 'Real Estate',
        "asset_value": 100000,
    },
    {
        "asset_name": 'Equities',
        "asset_value": 555000,
    }
    "etc..."

]

```
### `[POST] /api/portfolio/`

**_RESTRICTED ENDPOINT_** (token AND user_id required)

- Adds a portfolio into the database. 
  - **required information:**
  - _asset_name (string)_
  - _asset_value (integer)_

_What You Send:_

```json
[ {
        "asset_name": 'Stocks',
        "asset_value": 777000,
    },
  {
        "asset_name": 'Bonds',
        "asset_value": 1000000,
    },
    "etc..."
]
```

_Server Response:_

```json
{
  'Your portfolio consisting of the Assets: Stocks & Bonds have been added'
}
```

<!-- ### `[GET] /api/items/:item_id`

**_RESTRICTED ENDPOINT_** (token required)

- Returns the single item associated with that item id. 

_Server Response:_

```json
{
  "item_id": 1,
  "item_name": "Rice",
  "item_description": "Locally grown rice",
  "item_price": 7.99,
  "item_category": "Grains",
  "user_id": 1
}
```

### `[GET] /api/items/user/:user_id`

**_RESTRICTED ENDPOINT_** (token required)

- Returns all items added by a user with provided user id. 

_Server Response:_

```json
[   
    {
        "item_id": 1,
        "item_name": "Rice",
        "item_description": "Locally grown long grain rice.",
        "item_price": 7.99,
        "item_category": "Grains",
        "user_id": 1
    },
    {
        "item_id": 2,
        "item_name": "Bananas",
        "item_description": "Locally grown bananas.",
        "item_price": 12.99,
        "item_category": "Fruits",
        "user_id": 1
    }
    "etc..."

]
```

### `[DELETE] /api/items/:item_id`

**_RESTRICTED ENDPOINT_** (token required)

- Deletes the single item with provided item id.

_Server Response:_

```json
{
    "message": "Deleted 1 item."
}
``` -->
