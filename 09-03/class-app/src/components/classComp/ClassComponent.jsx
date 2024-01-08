import { Component } from "react"

class ClassComponent extends Component{
    render(){

        const a = 5;
        const b = 6;

    // Conditional Returns

      /*   if(a > b) {
            return (
                <div>
                    <h3>
                        A is Greater than B
                    </h3>
                </div>
            )
        }
        else {

        return(<div>
            <h2>
                B is Greater than A
            </h2>
        </div>)

        } 
    }*/

    return (
        <div>
            {a > b ? <h3>
                        A is Greater than B
                    </h3>
                    :  <h2>
                    B is Greater than A
                </h2>}
        </div>

    )
}
}
export default ClassComponent;