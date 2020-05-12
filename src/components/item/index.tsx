import React, {FunctionComponent,Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";


interface State {
    demo?:{
        demotext?:string;
    }
}

interface OwnProps extends RouteComponentProps {
    text?:string;
}

type Props = OwnProps;

const mapStateToProps = (state: State) => {
    return {
        text:state.demo?.demotext
    };
};

const Item: FunctionComponent<Props> = (props) => {


    return (
        <Fragment>
            {props.text}
        </Fragment>
    );
};

export default withRouter(connect(mapStateToProps, null)(Item));
