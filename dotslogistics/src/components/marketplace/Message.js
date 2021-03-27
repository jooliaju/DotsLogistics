import React, { Component } from "react";
import { Card, Button, TextField, withStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const styles = () => ({
  msgPanel: {
    width: "100%",
    position: "sticky",
    bottom: 0,
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    width: "20%",
    padding: 20,
    backgroundColor: "white",
    textAlign: "left",
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  sendBtn: {
    width: "100%",
    textAlign: "right",
  },
});

class Message extends Component {
  render() {
    const { classes, partner } = this.props;
    return (
      <div className={classes.msgPanel}>
        <Card className={classes.card}>
          <h3>Send a Message</h3>
          <TextField
            fullWidth
            className={classes.field}
            label="Business Partner"
            value={partner}
          />
          <TextField fullWidth className={classes.field} label="Email" />
          <TextField fullWidth className={classes.field} label="Phone Number" />
          <TextField
            fullWidth
            className={classes.field}
            label="Message"
            multiline
            rows={6}
          />
          <div className={classes.sendBtn}>
            <Button endIcon={<SendIcon />}>Send</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Message);
