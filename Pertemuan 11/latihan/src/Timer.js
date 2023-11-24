import React, { Component } from "react";
import axios from "axios";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      localTime: new Date().toLocaleTimeString(),
      worldTime: null,
      title: "Local Time in State",
      prevWorldTime: null,
      updatedWorldTime: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { title: props.appTitle };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the worldTime state has changed
    return this.state.worldTime !== nextState.worldTime;
  }

  componentDidMount() {
    this.localTimer = setInterval(() => this.tickLocalTime(), 1000);
    this.fetchWorldTime();
    this.worldTimer = setInterval(() => this.fetchWorldTime(), 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.setState({
      prevWorldTime: prevState.worldTime,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.worldTime !== this.state.worldTime) {
      this.setState({
        updatedWorldTime: this.state.worldTime,
      });
    }
  }

    componentWillUnmount() {
      clearInterval(this.localTimer);
      clearInterval(this.worldTimer);
    }

  tickLocalTime() {
    this.setState({ localTime: new Date().toLocaleTimeString() });
  }

  async fetchWorldTime() {
    try {
      const response = await axios.get("https://worldtimeapi.org/api/ip");
      this.setState({ worldTime: response.data.utc_datetime });
    } catch (error) {
      console.error("Error fetching world time:", error);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>Your Local Time is {this.state.localTime}</h2>
        {this.state.worldTime && <h2>World Time is {this.state.worldTime}</h2>}
        {this.state.prevWorldTime && (
          <h2>Prev World Time is {this.state.prevWorldTime}</h2>
        )}
        {this.state.updatedWorldTime && (
          <h2>Updated World Time is {this.state.updatedWorldTime}</h2>
        )}
      </div>
    );
  }
}

export default Timer;
