# SPA - DOM - 04: Events

**Yesterday**
- DOM traversal
- DOM manipulation

**TODAY**
- Events: listening and reacting to
- Some theory, mostly coding
- Two exercises

## Events

- We already did one kind of event
    - `document.body.onclick = <function>`

- On websites, most things are reactive
- Something happens, that dispatches an event
    - Also called triggering an event
    - Also called firing off an event
    - Also called emitting an event

- There are two main kinds of events
    - User reactive Events
    - Events that happen automatically

- User Events
    - something happens after you press a button
    - something happens after you write into an input field
    - something happens after you submit a form
    - something happens when you move your mouse
    - something happens when you resize your browser window

- Browser Events
    - something happens when page content is done loading
    - something happens when a javascript error occurs

- Your code can listen for events and react to those events

## Listening and Reacting

- To listen to events, we need an event listener!

- Event listener
    - A callback function you usually make yourself :)

- We add event listeners to elements _(or the document itself or the window)_
    - Any element can have event listeners
    - A `<button>` can have event listeners
    - An `<img>` can have event listeners
    - An `<input>` can have event listeners
    - The `<body>` can have event listeners
        - Yesterday we did this in an "oldschool" kind of way

- The recommended way
    - `<EventTarget>.addEventListener(<type-of-event>, <function-reference>)`
    - `<EventTarget>.removeEventListener(<type-of-event>, <function-reference>)`
    
    - `buttonElement.addEventListener("click", someFunction)`
    - `buttonElement.removeEventListener("click", someFunction)`


- When the function runs, it receives an **event object**
    - This is an object that describes the event that happened
    - Different events cause different event objects
    - Mouse events might have coordinates
    - Keyboard events might have the key that was pressed

- Keyboard Events: `keydown`, `keyup`
- Browser Events: `DOMContentLoaded`, window `resize` event
- Mouse/Pointer Events: `click`, `mouseenter`, `mouseleave`
    - Note: remember phones where "mouse enter" isn't a thing
    - Note: test your website on real devices, if you can

- As usual, MDN knows it all :)
    - https://developer.mozilla.org/en-US/docs/Web/API/Window
    - https://developer.mozilla.org/en-US/docs/Web/API/Document
    - https://developer.mozilla.org/en-US/docs/Web/API/Element

- Live coding

- There are LOTS of events

- Final note
    - You **can** make (dispatch and listen to) custom events
    - How to do that exactly is out of scope for the course
    - As usual, MDN has very good documentation 
    - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 












