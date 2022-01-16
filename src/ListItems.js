import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <Link to={`/apitest/192.168.7.71`}>
            <ListItemText primary="Serwer - 192.168.7.71" />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <Link to={`/apitest/192.168.7.72`}>
            <ListItemText primary="Serwer - 192.168.7.72" />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <Link to={`/apitest/192.168.7.73`}>
            <ListItemText primary="Serwer - 192.168.7.73" />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <Link to={`/apitest/192.168.7.74`}>
            <ListItemText primary="Serwer - 192.168.7.74" />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <Link to={`/apitest/192.168.7.75`}>
            <ListItemText primary="Serwer - 192.168.7.75" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
