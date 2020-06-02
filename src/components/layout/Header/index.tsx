import React, {FunctionComponent, useEffect} from 'react';
import {withRouter, RouteComponentProps} from "react-router-dom";
import {useDispatch, connect} from "react-redux"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MenuIcon from '@material-ui/icons/Menu';

import './index.scss';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface OwnProps extends RouteComponentProps {

}

type Props = OwnProps;

interface State {
}

function mapPropsToState() {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Header: FunctionComponent<Props> = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const openNewPage = (value: any) => () => {
       props.history.push(value)
    }
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(connect(mapPropsToState, null)(Header));


