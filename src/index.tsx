import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store, persistor, history} from "./store"; // 数据仓库
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import blue from "@material-ui/core/colors/blue";
import {PersistGate} from 'redux-persist/integration/react'; //持久化存储

const theme = createMuiTheme({
    palette: {
        primary: blue
    }
});

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <ThemeProvider theme={theme}>
                <App history={history}/>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
