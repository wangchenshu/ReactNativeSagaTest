import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { onIncrement, onDecrement, onIncrementAsync, onDecrementAsync } from '../reducers/reducers'
import { View, Button, Text } from 'react-native'

class Counter extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View>
				<Text>Clicked: {this.props.value} times</Text>
				<Button onPress={this.props.onIncrement} title="+" />
				<Button onPress={this.props.onDecrement} title="-" />
				<Button onPress={this.props.onIncrementAsync} title="increment after 1 sec" />
				<Button onPress={this.props.onDecrementAsync} title="decrement after 1 sec" />
			</View>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrementAsync: PropTypes.func.isRequired,
	onDecrementAsync: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		value: state
	}
}

const mapDispatchToProps = {
	onIncrement, onDecrement, 
	onIncrementAsync, onDecrementAsync
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter