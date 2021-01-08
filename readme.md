# 数据库操作

操作数据库，支持多种数据库

## postgresql

```sh
yarn add pg
```

mm.json

```json
{
	"db":{
		"client": "mysql",
		"connection": {
			"host": "127.0.0.1",
			"user": "your_database_user",
			"password": "your_database_password",
			"database": "myapp_test"
		}
	}
}
```

```json
{
	"db":{
		"client": "pg",
		"connection": "pgconnectstring",
		"searchPath": [
			"knex",
			"public"
		]
	}
}
```

```json
{
	"db":{
		"client": "pg",
		"version": "7.2",
		"connection": {
			"host": "127.0.0.1",
			"user": "your_database_user",
			"password": "your_database_password",
			"database": "myapp_test"
		}
	}
}
```

## mysql/mariadb

```sh
yarn add mysql2
```

or

```sh
yarn add mysql
```

mm.json

```json
{
	"db":{
		"client": "mysql",
		"version": "5.7",
		"connection": {
			"host": "127.0.0.1",
			"user": "your_database_user",
			"password": "your_database_password",
			"database": "myapp_test"
		}
	}
}
```

```json
{
	"db":{
		"client": "mysql",
		"connection": {
			"host": "127.0.0.1",
			"user": "your_database_user",
			"password": "your_database_password",
			"database": "myapp_test"
		},
		"userParams": {
			"userParam1": "451"
		}
	}
}
```

```json
{
	"db":{
		"client": "mysql",
		"connection": {
			"host": "127.0.0.1",
			"user": "your_database_user",
			"password": "your_database_password",
			"database": "myapp_test"
		},
		"pool": {
			"min": 0,
			"max": 7
		}
	}
}
```

## oracle

```sh
yarn add oracledb
```

```json
{
	"db":{
		"client": "oracledb",
		"connection": {},
		"fetchAsString": [
			"number",
			"clob"
		]
	}
}
```

## sqlite

```sh
yarn add sqlite3
```

```json
{
	"db":{
		"client": "sqlite3",
		"connection": {
			"filename": "./mydb.sqlite"
		}
	}
}
```

## mssqlserver

```sh
yarn add mssql
```

```json
{
	"db":{
		"client": "mssql",
		"connection": {
		}
	}
}
```
