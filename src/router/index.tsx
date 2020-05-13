import React, {FunctionComponent, lazy, Suspense} from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import Loading from "../components/loading";

//router懒加载
const lazyImport = (path: string) => lazy(() => import(`../views/${path}`));

// 异步渲染路由
interface OwnProps {
    list?: []
}

type Props = OwnProps;

interface State {
    menu?: {
        threeDupMenu?: []
    }
}

const mapStateToProps = (state: State) => ({
    list: state.menu?.threeDupMenu
});

const DynamicRouter: FunctionComponent<Props> = () => {
    return (
        <Suspense fallback={Loading}>
            <Switch>
                <Route exact path='/' component={lazyImport('home/index')}/>
                <Route exact path='/demo' component={lazyImport('demo/index')}/>
            </Switch>
        </Suspense>
    );
};


export default connect(mapStateToProps, null)(DynamicRouter);
