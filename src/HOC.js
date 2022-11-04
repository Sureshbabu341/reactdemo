import React from 'react';
class OtherOne extends React.Component{
    render(){
        return(
            <div>First Chaduvkondi</div>
        )
    }
}
const Hoc = (Component) => {
return(
    class extends React.Component{
        state = {
            auth: false
        }
        render(){
            return(
                <div>{this.state.auth ? <OtherOne /> : <Component />}</div>
            )
        }
    }
)
}

export default Hoc;