import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { ListSidebarData } from '../data';
import { SidebarData } from '../../models';
import { Icon } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })
);

interface ISidebarProps {}

export function Sidebar(props: ISidebarProps) {
  const classes = useStyles();
  const renderListMenu = (ListSidebarData: SidebarData[]) => {
    return ListSidebarData.map((item: SidebarData, index) => {
      return (
        <NavLink className={classes.link} to={item.path} key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Icon component={item.icon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} />
          </ListItem>
        </NavLink>
      );
    });
  };

  return <List className={classes.root}>{renderListMenu(ListSidebarData)}</List>;
}
