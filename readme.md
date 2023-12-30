# Indian Court Utils

A simple utils functions for interacting with Indian courts data. 

## Why?
I have created several microservices which works with data coming from several courts of India. Instead of writing/copying function again and again. I thought it would be easier to create a package and import it everywhere. That would be easier to manage and actual code will be more readable.

## Installation

```bash
npm install court-utils
```

## Usage

```js
import { isFilingNumber } from 'court-utils'
```

## Methods

#### isFilingNumber(number_in_string)

returns a boolean whether given string is filing number or not

#### isCaseNumber(number_in_string)

returns a boolean whether given string is case number number or not

### formatCINumber(number_in_string)

While showing the CI number they shows like GJHC01-123456-123456 but internally they use it like GJHC01123456123456 so this method returns that.

### formatOriginalCaseNumber(number_in_string)

case number usually has `/` in them like `R/SCA/12319/2020` some times it confuses language because `/` is being used as path navigator in Linux. let's say you are storing a file at a location using path if you add case number like the example then it will create 3 folders R, SCA and 12319 and store the data with filename 2020.

so better to swap those `/` slashes to `-` dashes. That's what this method does.

### getInternalCaseNumber(number_in_string)

takes something like `R/SCA/12319/2020` and returns 202100123192020 which is usable internally to communicate further with court's data.

## dependencies

- lodash

## Contact 
got an idea in mind? let's make it a reality.

[![Contact me on twitter][twitter_logo]][twitter]
[![Contact me on telegram][telegram_logo]][telegram]
[![Mail me][gmail_logo]][gmail]
[![Linked In profile][LinkedIn_logo]][LinkedIn]


[twitter]: https://twitter.com/ArpitVasani
[telegram]: http://t.me/Arpit_Vasani
[gmail]: mailto:vasani.arpit@gmail.com?subject=Regarding%20your%20github%20profile&body=Hi
[LinkedIn]: https://www.linkedin.com/in/arpit-vasani-32ba7472/
[instagram]: https://www.instagram.com/arpitvasani


[twitter_logo]: https://user-images.githubusercontent.com/6497827/57843958-c30e6b00-77ec-11e9-97bd-dfbc800f96a9.png
[telegram_logo]: https://user-images.githubusercontent.com/6497827/57844175-2ac4b600-77ed-11e9-8488-f2d45efa7497.png
[gmail_logo]: https://user-images.githubusercontent.com/6497827/62424751-c1b85480-b6f0-11e9-97de-096c0a980829.png
[LinkedIn_logo]: https://user-images.githubusercontent.com/6497827/112791908-0dff9780-9080-11eb-8217-62cee99fdce8.png
[instagram_logo]: https://user-images.githubusercontent.com/6497827/112792828-cd088280-9081-11eb-8a9c-1c56feba35b9.png