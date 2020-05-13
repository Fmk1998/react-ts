import React, {FunctionComponent} from 'react';
import {HashRouter} from 'react-router-dom';
import {History} from "history";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Main from "./components/layout/Main";
import {ConnectedRouter} from 'connected-react-router';

interface OwnProps {
    history: History
}

interface State {
    setting?: any
}

type Props = OwnProps;

const mapPropsToState = (state: State) => {
};

const App: FunctionComponent<Props> = ({history}:Props) => {
    return (
        <ConnectedRouter history={history}>
            <HashRouter>
                <Grid container style={{width: '100%', height: '100%', display: 'flex'}}>
                    <Main/>
                </Grid>
            </HashRouter>
        </ConnectedRouter>
    );
};

export default connect(mapPropsToState)(App);
