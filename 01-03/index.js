const blogTitle = document.querySelector('#title')
const blogBody = document.querySelector('#postbody')
const userId = document.querySelector('#userid')
const blogHandler = document.querySelector('#sendblog')

blogHandler.addEventListener('click', async ()=>{

    const blogTitleValue = blogTitle.value
    const blogBodyValue = blogBody.value
    const userIdValue = userId.value

    const body = {
        title: blogTitleValue,
        body: blogBodyValue,
        userId: userIdValue
    }
 
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const options = {

        // iMPORTANT THING we need to mention which method we want to use e.g. DELETE, UPDATE, POST,..

        method: "POST",

        // SECOND IMPORTANT THING, we need to convert js object into JSON object with stringify method.
        body: JSON.stringify(body),
        
        // Inside the headers property we will notify the API what kind of
        // data we are sending to the API
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }

    // JSON.parse() & JSON.stringify()

    // Every response object contains a json() method inside it.
    // We can call that json() method to convert the JSON object into a javascript object.
/* 
        • json() is asynchronous and returns a Promise object that resolves to a JavaScript object.
        • JSON.parse() is synchronous can parse a string and change the resulting returned JavaScript object.  
*/

/* fetch(url, options )
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err=>console.log(err))

 */
// With Try - Catch code Blocks


try{

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const myBlogPost = document.createElement('div')
    const myBlogTitle = document.createElement('h2')
    const myBlogText = document.createElement('p')

    myBlogTitle.innerText = data.title
    myBlogText.innerText = data.body

    myBlogPost.append(myBlogTitle,myBlogText)

    document.body.append(myBlogPost)

}
catch(err){
    console.log("Error occured", err)
}
})

