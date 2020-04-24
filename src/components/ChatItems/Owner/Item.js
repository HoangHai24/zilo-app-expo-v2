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
        backgroundColor: "#0b82fa",
        padding: 8,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 2
    }
});
export default Item;
