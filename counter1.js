import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { connect } from 'react-redux';
import { store } from './redux/reducer1';
import { INCREMENT,DECREMENT } from './redux/action1';
function Counter({count}) {
    var [count, setCount] = useState(count);
    return (
      <View style={styles.container}>
          <View style={{width: '100%', height: 50, backgroundColor: 'red',flexDirection:'row' ,justifyContent:'space-around'}}>
            <TouchableOpacity 
            onPress={()=> {
              store.dispatch(INCREMENT); 
             setCount(store.getState().count)}}>
                <Ionicons name="add-circle-outline" size={32} color="black" />
            </TouchableOpacity>
                <Text style={{marginTop:8}}>{count}</Text>
            <TouchableOpacity 
            onPress={()=> {
              store.dispatch(DECREMENT); 
              setCount(store.getState().count)}}>
              <Ionicons name="remove-circle-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
  });
  var mapStateToProps = (state) => ({
    count: state.count
  })
  export default connect(mapStateToProps,null)(Counter);
  