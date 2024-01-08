## FETCH API
- CRUD Operations ( Create, Read, Update and Delete)
- To post data to API
- To retrieve data from API
- Modify data on API.
- Deleting the data from API

- Is Fetch the only way to communicate with API's? No

## Fetch - POST (e.g. fetch(URL, options Object))
What are the Parameters?
- URL- Path of our API that we want to access.
- Options Object

Default behavior of Fetch Method => GET

- if We want to do something different then GET or even for GET request we need to mention it
    inside the options Object e.g. `{method: "POST"}`

# Options Object:

- It is the second parameter of the fetch Method.

`{
    mode: "cors",
    method: "POST",
    body: "it will the contain the data that we want to send / post to our api after converting it to JSON format"
    `JSON.stringify({
        email: user@email.com,
        password:123456
    })`,

    In headers we pass content-type and other options 
    headers: `{
        "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
    }`
}
`
