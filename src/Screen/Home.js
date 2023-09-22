import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Button } from "native-base";
import { connect } from "react-redux";
import Store from "../redux/Store";
import { addNumber } from "../redux/actions";

class Home extends Component {
  componentDidMount() {
    Store.dispatch(addNumber(0));
    this.timer = setInterval(() => {
      Store.dispatch(addNumber(this.props.mystate.number + 1));
    }, 1000);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("in home");
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Button
          style={{ width: 100, alignItems: "center", justifyContent: "center" }}
          rounded
          danger
          onPress={() => this.props.navigation.navigate("Detail")}
        >
          <Text>GoTO</Text>
        </Button>
        <Button
          style={{ width: 100, alignItems: "center", justifyContent: "center" }}
          rounded
          danger
          onPress={() => this.props.navigation.navigate("Detail")}
        >
          <Text>Next</Text>
        </Button>
        <Button
          style={{ width: 100, alignItems: "center", justifyContent: "center" }}
          rounded
          danger
          onPress={() => this.props.navigation.navigate("Detail")}
        >
          <Text>Next1</Text>
        </Button>
      </View>
    );
  }
}
mapState = (state) => {
  return {
    mystate: state.getNumber,
  };
};
export default connect(mapState)(Home);
