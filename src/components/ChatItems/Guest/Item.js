import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Item = (props) => {
    return (
        <View style={[styles.item,props.index===0&&{marginBottom:0}]}>
            {props.children}
        </View>
    );
};
const styles = StyleSheet.create({
    item:{
        backgroundColor: "#ddd",
        padding: 8,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginBottom: 2
    }
});
export default Item;
