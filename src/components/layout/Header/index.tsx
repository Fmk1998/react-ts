import React, {FunctionComponent, useEffect} from 'react';
import {withRouter, RouteComponentProps} from "react-router-dom";
import {useDispatch, connect} from "react-redux";
import { FormattedMessage } from 'react-intl';
import {SETTING} from "../../../store/action-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Translate from "@material-ui/icons/Translate"

import './index.scss';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Menu, MenuItem} from "@material-ui/core";

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

// 语言切换
const Language = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    //获取点击事件元素
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    };

    //关闭点击元素
    const handleClose = () => {
        setAnchorEl(null)
    };

    //修改语言
    const changeLanguage = (lang: string) => {
        dispatch({
            type: SETTING,
            payload: lang
        })
        handleClose()
    };

    return (
        <div className="language">
            <Button aria-controls="simple-menu" onClick={handleClick} style={{color: "#ffffff"}}>
                <Translate/>
                <span>Language</span>
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => changeLanguage("zh")}>中文</MenuItem>
                <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            </Menu>
        </div>
    );
}

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
                    <FormattedMessage
                        id="title"
                    />
                </Typography>
                <Language/>
                <Button color="inherit">
                    <FormattedMessage
                    id="login"
                /></Button>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(connect(mapPropsToState, null)(Header));


