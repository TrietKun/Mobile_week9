import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/action';

const Counter = ({ reduxCount, increment, decrement }) => {
  const [localCount, setLocalCount] = useState(reduxCount);

  return (
    <View>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
        onPress={() => {
          increment();
        }}
      >
        <Text>Cộng</Text>
      </TouchableOpacity>

      <Text>Number {localCount}</Text>

      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
        }}
        onPress={() => {
          decrement();
        }}
      >
        <Text>Trừ</Text>
      </TouchableOpacity>
    </View>
  );
};

var mapStateToProps = (state) => ({
  reduxCount: state.count,
});

var mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
