# passportjs hands-on

Hands on - NodeJS + PassportJS Authentication.

Next aproaches were addressed:

## passport - mongo

This mini-project is based on next references:

- [Autenticar Aplicaciones Node.js con Passport](https://code.tutsplus.com/es/tutorials/authenticating-nodejs-applications-with-passport--cms-21619)

- [Why do we need serserializeUser and deserializeUser in Passport.js?](https://www.sitepoint.com/community/t/why-do-we-need-serserializeuser-and-deserializeuser-in-passport-js/240849)

- [How do Cookies and Sessions work?](https://stackoverflow.com/questions/11142882/how-do-cookies-and-sessions-work)

- [Understanding passport serialize deserialize](https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize)

## jwt + passport

This mini-project is based on next references:

- [Implementing JWT using Passport](https://blog.jscrambler.com/implementing-jwt-using-passport/)
- [Express, Passport and JSON Web Token (jwt) Authentication for Beginners](https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/)

# jwt + passport + mongo

This mini-project is based on next reference:

- [Token based authentication in Node.js with Passport, JWT and bcrypt](https://jonathas.com/token-based-authentication-in-nodejs-with-passport-jwt-and-bcrypt/)
- [Password Authentication with Mongoose (Part 1): bcrypt](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt)

But I decided to change some packages it uses:

- `jsonwebtoken` instead of `jwt-simple`, because first one is a more active and
popular choice.

> npm i connect-flash dotenv bcryptjs express body-parser mongoose jsonwebtoken passport passport-jwt --save
