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
  "message": "Welcome, john!",
  "user_id": 1
}
```

<p>You will use the token given by the server for authentication.</p>
<p>User ID should also be stored as this will be required in the header when adding items.</p>

<p>Sample Credentials you can use for login testing:</p>

- `username: sam, password: 1234`

- `username: frodo, password: 5678`