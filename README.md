#request header parsing microservice built on node.js
##this is built for a freecodecamp project
[freecodecamp](https://www.freecodecamp.com)

##project discription
Returns JSON data with ip address, browser language and operating system. Response is at url/api/whoami/, other requests will return an html file with a link to url/api/whoami/.

##server launch instructions
From the console run:

    node server.js

Or on Heroku the Procfile should launch the server automatically

##dependencies
* node.js
* uses built in node modules:
 * http

##Example output:

{"ipaddress":"00.000.000.000","language":"en-US","software":"Macintosh; Intel Mac OS X 10_11_3"}