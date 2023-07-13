# NestJs user data api

This project is CRUP api develop on NestJs and Mongodb

---

Get all user

```bash
curl --location 'https://nestjs.gritsp.dev/users' \
     --header 'Authorization: <passphrase>' 
```

response

```bash
[
    {
        "_id": "id",
        "firstname": "string",
        "lastname": "string",
        "data": "string",
        "dateCreated": timestapms,
        "activated": boolean,
        "__v": 0
    }
]

```

---

Get data from id

```bash
curl --location 'https://nestjs.gritsp.dev/users/<_id>' \
     --header 'Authorization: <passphrase>' \

```

response

```bash
{
    "_id": "id",
    "firstname": "string",
    "lastname": "string",
    "data": "string",
    "dateCreated": timestapms,
    "activated": boolean,
    "__v": 0
}
```

---

Post new data

```bash
curl --location 'https://nestjs.gritsp.dev/users' \
		--header 'Authorization: <passphrase>' \
		--header 'Content-Type: application/json' \
		--data '{
		        "firstname": "string",
		        "lastname": "string",
		        "data": "string"
		}'
```

response

```bash
{
    "_id": "id",
    "firstname": "string",
    "lastname": "string",
    "data": "string",
    "dateCreated": timestapms,
    "activated": boolean,
    "__v": 0
}
```

---

Edit data with id

```bash
curl --location --request PUT 'https://nestjs.gritsp.dev/users/<_id>' \
--header 'Authorization: <passphrase>' \
--data '{
		"firstname": "string",
    "lastname": "string",
    "data": "string"
}'
```

---

Delete data with id

```bash
curl --location --request DELETE 'https://nestjs.gritsp.dev/users/<_id>' \
--header 'Authorization: <passphrase>' 
```