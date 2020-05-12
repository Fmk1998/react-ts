import {Fragment, FunctionComponent, useState} from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import React from "react";
import Item from "../../components/item";


interface State {

}

interface OwnProps extends RouteComponentProps {

}

type Props = OwnProps;

const Demo: FunctionComponent<Props> = (props) => {

    const [text,setText] = useState("123");
    const [text2,setText2] = useState("456");

    return (
        <Fragment>
            <Item text={text}/>
            <Item text={text2}/>
        </Fragment>
    );
};

export default withRouter(Demo);
