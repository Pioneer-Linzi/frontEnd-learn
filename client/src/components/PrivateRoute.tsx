import {Redirect, Route} from "react-router";
import * as React from "react";


function returnflag (){
    return Math.random()>0.5;
}

// @ts-ignore
function PrivateRoute( {component: Component,...rest}) {
    function renderComponent (props: { location: any; }){
    return  (
        returnflag() ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: "/webWorker",
                    state: { from: props.location }
                }}
            />
        )
    )
}
    return (
        <Route
            {...rest}
            render={renderComponent}
        />
    );
}



export default PrivateRoute;