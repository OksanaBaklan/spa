###  USE REDUCER HOOK
in javascript reducer method we were having two parameters first one must be a call back and second could be an 
initial value.

const result = array.reduce((acc, curr) =>{}, initialValue )

here result could be a single value or object or even array.


the Same way useReducer Hook in react will accept a callback function as first parameter and an initial value
as second parameter.
The Purpose of useReducer Hook:

const [count, setCount] = useState(0)

const initialState = 0,
const [state, dispatch] = useReducer(callback / reducer , initialState )