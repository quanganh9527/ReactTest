import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Button } from 'native-base'
import { connect } from 'react-redux'
import Store from '../redux/Store'
import { addNumber } from '../redux/actions'
class Detail extends Component {
    plusNumber = () => {
        Store.dispatch(addNumber(this.props.mystate.number + 1))
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button rounded onPress={this.plusNumber}>
                    <Text>Plus</Text>
                </Button>
                <Button rounded onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </Button>
                <Text>{this.props.mystate.number}</Text>
            </View>
        )
    }
}
mapState = state => {
    return {
        mystate: state.getNumber
    }
}
export default connect(mapState)(Detail);