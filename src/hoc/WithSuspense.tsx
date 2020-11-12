import React, {Suspense} from 'react';
import {Loader} from '../components/common/Loader/Loader';


export const WithSuspense = (Component: any) => {
    return (props: any) => <Suspense fallback={<Loader/>}>
        <Component {...props}/>
    </Suspense>
}