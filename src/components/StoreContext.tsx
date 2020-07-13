import React from "react";

let StoreContext = React.createContext<any | null>(null)

export const Provider = (props: any) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;