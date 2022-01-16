import React, { Component } from "react";
import Pagination from "./Pagination";
import InputField from "./InputField";
import TextArea from "./TextArea";
const API = require("./helper/API");

/** Required page size */
const WINDOW_SIZE = require("../server/constants").WINDOW_SIZE;

class GetLog extends Component {
  constructor() {
    super();
    this.state = {
      page: [],
      skip: 0,
      error: false,
      path: "",
      throbber: false,
      serverName: null,
    };
    this.logListingError = { flag: this.state.error, msg: "" };
    this.move = this.move.bind(this);
    this.submitPath = this.submitPath.bind(this);
    this.endpoint = "/api";
  }

  componentDidMount() {
    if (this.state.serverName === null) {
      this.setState({
        serverName: this.props.match.params.id,
      });
      this.submitPath('')
    }
  }

  move(direction) {
    if (this.state.page.length !== 0) {
      let skip = parseInt(this.state.skip, 10);
      switch (direction) {
        case "first":
          skip = 0;
          break;
        case "previous":
          skip <= WINDOW_SIZE * 2 ? (skip = 0) : (skip -= WINDOW_SIZE * 2);
          break;
        case "last":
          skip = -1;
          break;
        default:
          break;
      }
      this.submitPath(this.state.path, skip);
    } else {
      this.setState({ error: true });
    }
  }

  submitPath(path, skip) {
    if (path.length !== 0) {
      this.setState({ throbber: true });
      API.fetchLines.call(this, path, skip);
    } else {
      console.log("empty path");
      this.setState({ error: true, throbber: false });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="App row col">
          <div className="App-header col-md-12">
            <h2>
              Log File Viewerw
              <small>&nbsp; e.g. /var/log/cron</small>
            </h2>
          </div>
        </div>
        <InputField submit={this.submitPath} error={this.state.error} />
        <TextArea
          lines={this.state.page}
          error={this.logListingError}
          throbber={this.state.throbber}
        />
        <Pagination move={this.move} />
      </div>
    );
  }
}

export default GetLog;
