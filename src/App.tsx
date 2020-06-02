import React, {FunctionComponent} from 'react';
import {HashRouter} from 'react-router-dom';
import {History} from "history";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Main from "./components/layout/Main";
import {ConnectedRouter} from 'connected-react-router';
import Header from './components/layout/Header';
import SlideBar from './components/layout/SlideBar';
import MyErrorBoundary from "./components/error/ErrorBoundary";

interface OwnProps {
    history: History
}

interface State {
    setting?: any
}

type Props = OwnProps;

const mapPropsToState = (state: State) => {
};

const App: FunctionComponent<Props> = ({history}: Props) => {
    return (
        <MyErrorBoundary>
            <ConnectedRouter history={history}>
                <HashRouter>
                    <Grid container style={{width: '100%', height: '100%', display: 'flex'}}>
                        <Grid item style={{width: '100%'}}>
                            <Header/>
                        </Grid>
                        <Grid item xs={3}>
                            <SlideBar/>
                        </Grid>
                        <Grid item xs={9}>
                            <Main/>
                        </Grid>
                    </Grid>
                </HashRouter>
            </ConnectedRouter>
        </MyErrorBoundary>
    );
};

export default connect(mapPropsToState)(App);
