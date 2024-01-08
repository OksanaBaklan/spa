export const initialState = []

export const reducer = (prevState, action) =>{
  if(action.type=== "push") {
    
    return [...prevState, action.payload]
  }
  if(action.type === "pop"){
    
    return [...prevState.slice(0, -1)]
  }
  if(action.type === "shift"){
    return [...prevState.slice(1)]
  }
  if(action.type === "unshift") {
    return [action.payload, ...prevState]
  }
  return prevState
}