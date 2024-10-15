# Payment Server

This Backend handles the request and adds the money to user accounts using transactions in database. 

# Installation

install [Express](https://www.npmjs.com/package/express) 

``` bash 
npm -i express
```

install [JWT](https://www.npmjs.com/package/jsonwebtoken) library

``` bash
npm -i jsonwebtoken
```

install [Cors](https://www.npmjs.com/package/cors?activeTab=readme) library
``` bash 
npm -i cors
```

These all commands installs all the required libraries to run the server.

## Run Server

1. Add Your Database link to :- [Database](./Database/db.js) file
2. To run the server locally :- 

``` bash 
node index.js
```

#  Usage 

All the requests first goes to **http://localhost:3000/api/v1**

> ## **Signup** 
> it has a **POST** request (**http://localhost:3000/api/v1/signup**) \
> which requires body with :- 
> * **username** : which should be unique.
> * **email** : which should be unique.
> * **password** : which should be unique + have a upper case , lower case , number , special character.
> * **Uinfo** : { \
>    firstName: Your First name, \
>    lastName: Your last name, \
>    phoneNumber: Your 10 digit phone number,\
>    dob: Your date of birth.
>  } 
>>
> This end point creates the user in the database , \
> Also creates the Account for the user. 

 

> ## **Signin** 
> it has a **POST** request (**http://localhost:3000/api/v1/signin**) \
> which requires body with :- 
> * **username** : Users Username./
>  OR
> * **email** :Users Email.
> * **password** : Users Password.
>>
> This endpoint checks if there is the user or not, \
> after that it checks for if the pssword is correct or not, \
> if it is correct, then it logins the user and gives authorization key to the user.

> ## **Add_Money** 
> it has a **POST** request (**http://localhost:3000/api/v1/addmoney**) \
> which requires body with :- 
> * **All user information**
> * **amount** : Amount to transfer money.
> * **to_Account** : username or email to transfer money.
>>
> This endpoint checks if there is the user or not, \
> after that it checks for Authorization,\
> if the User have Authorization then it proceeds with the transfer of money, \
> transfer of money happens through the **Transaction** in database.

