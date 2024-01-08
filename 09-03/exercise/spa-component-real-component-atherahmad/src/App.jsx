import React from 'react'
import Card from './components/Card'

function App() {

    const cardData = {
        imagePath : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
        cardTitle: "Bob Dylan",
        cardText: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        cardLink: "https://en.wikipedia.org/wiki/Bob_Dylan",
        linkTitle: "Go to wikipedia"
      }

    const dataArray = [
        {
            imagePath : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
            cardTitle: "Bob Dylan",
            cardText: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
            cardLink: "https://en.wikipedia.org/wiki/Bob_Dylan",
            linkTitle: "Go to wikipedia"
          },
          {
            imagePath : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
            cardTitle: "Jack",
            cardText: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
            cardLink: "https://en.wikipedia.org/wiki/Bob_Dylan",
            linkTitle: "Go to wikipedia"
          },
          {
            imagePath : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
            cardTitle: "Tom",
            cardText: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
            cardLink: "https://en.wikipedia.org/wiki/Bob_Dylan",
            linkTitle: "Go to wikipedia"
          }
    ]
    return (
        <div style={{display:"flex",flexDirection:"row" }}>

            {/* We can also use below syntax */}
            {/* <Card></Card> */}
            {dataArray.map(item=><Card data={item} />)}
            {/* <Card data={cardData}/> */}

        </div>
    )
}

export default App

/* 
what happens in map method?

Actually map method iterates through every element of the array and perform something on it or not and return
a new array in which new updated elements are added.

*/

/* const numbers = [ 2 , 4 ,6]
console.log("output",numbers.map(element=> <li>{element}</li>)) */
