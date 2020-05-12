import React, {FunctionComponent, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Loading from "../components/loading";

//router懒加载
const lazyImport = (path: string) => lazy(() => import(`../views/${path}`));

interface OwnProps {
}

type Props = OwnProps;

const DynamicRouter: FunctionComponent<Props> = () => {
    return (
        <Suspense fallback={Loading}>
            <Switch>
                <Route exact path='/' component={lazyImport('home/index')}/>
            </Switch>
        </Suspense>
    );
};


export default DynamicRouter;
