export const type = {
    INCREMENT : "increment",
    DECREMENT : "decrement",
    RESET : "reset"
}

export const  countReducer = (state, action) =>{

    // Action parameter value depends on the value passed from the dispatch method
    // if we pass an object from dispatch method then action will be an object
    // if we pass a string from dispatch method then action will be a string.
    // State is the current state value

    switch(action){
      case type.INCREMENT : {
        return state + 1
      }
      case type.DECREMENT : {
        return state - 1
      }
      case type.RESET : {
        return 0
      }
      default :{
        return state
      }
    }
    
  }
  export const initialState = 0