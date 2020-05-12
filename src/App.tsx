import React, {FunctionComponent} from 'react';
import {HashRouter} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Main from "./components/layout/Main";

interface OwnProps {

}

type Props = OwnProps;

const App: FunctionComponent<Props> = (props: any) => {
    return (
        <HashRouter>
            <Grid container style={{width: '100%', height: '100%', display: 'flex'}}>
                <Main/>
            </Grid>
        </HashRouter>
    );
};

export default App;
