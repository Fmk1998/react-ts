import React,{FunctionComponent} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../views/home";

interface OwnProps {
}
type Props = OwnProps;

const DynamicRouter: FunctionComponent<Props> = () => {
    return (
        <Switch>
            <Route path='/' component={Home}/>
        </Switch>
    );
};


export default DynamicRouter;
