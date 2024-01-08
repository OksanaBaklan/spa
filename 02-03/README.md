##  Topics for Today

- CORS (Cross Origin Resource Sharing)
- Local Storage

### Assessment

- After Lunch Break we will have SPA 1 Assessment

## What are Cors
- (CORS) is a (HTTP-header based ) mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit resources.

CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

- What is an origin? 
    e.g. http://127.0.0.1:5500
    Origin consists on three parts
    - protocol  http or https (including ://) (e.g. http:// in http://localhost:5000))
    - the domain name or ip address (e.g. localhost.com in http://localhost:5000)
    - port number (including the colon sign : ) (e.g. :5000 in localhost:5000)

## Where we define cors:
    - We define cors inside the options object while making http request
        `{
            mode:'cors' // 'same-origin' , 'no-cors'
            }`
    - By default request is made with `mode:'cors'`

    - Three values that we can have :
        cors, same-origin and no-cors

        - `cors` It is the default value and in this case we are allowing the user to make a cross origin request but be carful that in this case server or the second origin you are targeting should also allow the cross origin requests.

        - 'same-origin' in this case we restrict the browser from making cross origin requests. So browser can only get the resources from same origin. You will not see
        any request in network tab if you are making a cross origin request for resources

        -'no-cors' , it is a very rare case that someone is setting 'no-cors' in this case you will be able to se the request in network tab. 

## Local Storage:

- Local storage is a method of storing  key , value pairs of information inside the browser. This data is persistent and will stay there even if you close the browser tab or browser and open it again

- Data will be stored as string.

- How to store objects on local storage with javascript
    - first convert that object into a string with `JSON.stringify()`
    - call the `localStorage.addItem("keyName", value)` method.
    - To retrieve the data use `localStorage.getItem("keyName")`
    - parse that data using `JSON.parse()` 
    - To delete some key value pair from local storage we can use `localStorage.removeItem("keyName")` method.