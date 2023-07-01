# Shorten your Long URLs with **c-url-shortener**

Useful for shortening URLs for sharing.
## Installation
```sh
npm i c-url-shortener
```

## Usage example

```js
const shortener = require('c-url-shortener');

// Shorten a URL exaple : https://otamurodakbarov.uz

shortener("https://otamurodakbarov.uz").then((shortUrl) => {
    console.log(shortUrl);
});
//=> 'https://urlserver.vercel.app/lKWoFimsf'
```

## API

### https://urlserver.vercel.app (Default)

By default, this module uses the [https://urlserver.vercel.app](https://urlserver.vercel.app) API.

You can use a custom API by setting the `URL_SHORTENER_API` environment variable.

<!--  contact and author and other links -->
## Author

**© elayt**
* [GitHub Profile](
	https://github.com/bd-ans )  * [Telegram Profile](https://t.me/bd-ans )  * [LinkedIn Profile](https://uz.linkedin.com/in/otamurod-akbarov-930789270 )