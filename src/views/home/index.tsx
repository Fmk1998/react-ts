import React, {FunctionComponent,Fragment, useEffect, useState} from "react";
import {useDispatch, connect} from "react-redux"
import {withRouter, RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";
import {DEMO_TEXT} from "../../store/action-types";



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
    const dispatch = useDispatch();

    const [text,setText] = useState("fmk");

    useEffect(()=>{
        dispatch({
            type: DEMO_TEXT,
            data: text
        })
    },[]);

    return (
        <Fragment>
            <Button variant="contained" color="secondary" onClick={()=>props.history.push("/demo")}>Demo</Button>
        </Fragment>
    );
};

export default withRouter(connect(mapStateToProps, null)(Home));
