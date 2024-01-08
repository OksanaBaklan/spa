### Topics for Today
- Options object in addEventListener method.
- Current Target and Target properties of Event.
- Form Event Handlers
- Prevent Default Method.
- Event Bubbling
- Event Delegation


## Form Events:

- submit Event: When ever we hitting enter or clicking the submit button ,that will submit the form and submit event will be triggered.

- reset Event: When ever we are clicking on the form reset button which is defined with type 'reset' that will trigger the reset event.

## Option's Object in addEventListener Method

## capture property : by default false

- Normally when even we perform an event Browsers capture them from Top to bottom e.g. Window => Document => Html => Body => Main-Container => Sub-Container => Heading-Container and then it trigger event listener from Bottom to Top (Bubbling Up) that means event listener for Targeted Element will run first And then Event listener of parent element will be triggered. This is the normal behavior in browsers.

- If we pass a third Options object in addEventListener method and use capture:true then events will be triggered from top to bottom as they were captured.

## once property : by default false

- If we set once property `true` inside the option object then that event listener will be triggered only once and then removed. In checkout option we can use once. 


- Options is a third parameter  of addEventListener method.Originally when addEventListener came out then we were having a third parameter a boolean value `true`or `false`. So third parameter was a useCapture we can set it `true` or `false`.

## passive property : by default false

- Passive value is by default `false` but if we make it true then it means that in this event listener we will not prevent default behavior of the browser on when an event happens. But if we call preventDefault() for that event and set the passive to `true` default behavior will not be prevented and  a warning will be shown in the console.

### Event target and Event current Target:

- E.target  returns the element that you actually clicked on.
- E.currentTarget actually returns the element to which your event listener was attached.


