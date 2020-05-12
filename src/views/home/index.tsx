import React, {FunctionComponent,Fragment, useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";



interface State {
}

interface OwnProps extends RouteComponentProps {
}

type Props = OwnProps;

const mapStateToProps = (state: State) => {
    return {
    };
};

const Home: FunctionComponent<Props> = (props) => {

    const [text,setText] = useState("123");


    return (
        <Fragment>
            <h1>home</h1>
        </Fragment>
    );
};

export default Home;
