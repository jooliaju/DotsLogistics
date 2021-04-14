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
  btn: {
    margin: 10,
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      number: "",
      message: "",
    };
  }

  handleSend = () => {
    if (this.state.email && this.state.number && this.state.message)
      this.props.msgSent();
  };

  handleChangeEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value });
  };

  handleChangeNumber = (e) => {
    this.setState({ ...this.state, number: e.target.value });
  };

  handleChangeMessage = (e) => {
    this.setState({ ...this.state, message: e.target.value });
  };

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
          <TextField
            required
            fullWidth
            className={classes.field}
            label="Email"
            onChange={this.handleChangeEmail}
          />
          <TextField
            required
            fullWidth
            className={classes.field}
            label="Phone Number"
            onChange={this.handleChangeNumber}
          />
          <TextField
            fullWidth
            required
            className={classes.field}
            label="Message"
            multiline
            rows={6}
            onChange={this.handleChangeMessage}
          />
          <div className={classes.sendBtn}>
            <Button
              className={classes.btn}
              style={{ backgroundColor: "transparent" }}
              endIcon={<SendIcon />}
              onClick={this.handleSend}
            >
              Send
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Message);
