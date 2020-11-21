# Hexabin
<img src="https://github.com/angelina-tsuboi/Hexabin/blob/master/public/images/HexbinLogo.png" alt="Logo" height="113" width="90">

A Node.js/Express.js REST API to GET and CONVERT binary, hexadecimal, octal, and decimal formats.

![](https://img.shields.io/badge/contributions-welcome-34cdfa)

## Website

Visit [http://www.hexabin-api.com](http://www.hexabin-api.com)

## API Documentation

Base URL for all endpoints http://www.hexabin-api.com/api


### Endpoints
Routes | Description
------------ | -------------
`GET /api/:format` | Get a binary, hexadecimal, octal, random, or decimal value. 

Path Parameters-

`format`: format to retreive (only: hex, binary, octal, random, or decimal)

Query Parameters-

`?length`: length of value

`?amount`: amount of values

Example Requests-

`GET /api/binary`

`GET /api/decimal`

`GET /api/random?amount=2`

`GET /api/hex?amount=4`

`GET /api/octal?amount=4&length=3`

Example Responses-
```
{"result":["1101"], "error":false}

{"result":["503"], "error":false}

{"result":["41985","#F38599"], "error":false}

{"result":["#651F54","#B2F4DE","#8A64B2","#5233F1"], "error":false}

{"result":["456","141","620","102"], "error":false}
```
----------------------------
Routes | Description
------------ | -------------
`GET /api/:from/:fromValue/convert/:to` | Convert values of different formats.

Path Parameters-

`from`: value to convert from (binary, decimal, octal, or hex)

`fromValue`: the value of the format to convert from

`to`: value to convert to (binary, decimal, octal, or hex)

Example Requests-

`GET /api/binary/1010/convert/decimal`

`GET /api/decimal/12/convert/octal`

`GET /api/hex/12/convert/binary`

`GET /api/octal/7435/convert/hex`

Example Responses-
```
{"result":10, "error":false}

{"result":"14", "error":false}

{"result":"10010", "error":false}

{"result":"F1D", "error":false}
```
----------------------------
## Usage
* You are retreiving format values for an app or website.
* You are making a quiz game about binary.
* You want to convert octal to binary without doing all the hassle yourself.

## Authors
* [Angelina Tsuboi](https://github.com/angelina-tsuboi)

## Support
Please [create a new issue](https://github.com/angelina-tsuboi/Hexabin/issues/new) for support and issues.

## Issues or Bugs
Please use the [BUG_REPORT](https://github.com/angelina-tsuboi/Hexabin/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) or [FEATURE_REQUEST](https://github.com/angelina-tsuboi/Hexabin/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) to submit any issues ot bugs encountered.

## Contributing
Please read the [CONTRIBUTING](https://github.com/angelina-tsuboi/Hexabin/blob/master/CONTRIBUTING.md) for details on contributing to the Hexabin API.

## License
This project is licensed under [MIT](https://opensource.org/licenses/MIT). Please read the [LICENSE](https://github.com/angelina-tsuboi/Hexabin/blob/master/LICENSE) for details.

----------------------------
###### [Hexabin API](https://github.com/angelina-tsuboi/Hexabin) is maintained by [angelina-tsuboi](https://github.com/angelina-tsuboi).