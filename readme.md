# 数据库操作

操作数据库，支持多种数据库

## postgresql

```sh
yarn add pg
```

```json
{
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
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
	"dbconfig":{
		"client": "mssql",
		"connection": {
		}
	}
}
```
