import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BoxImages from "src/components/ChatImages/BoxImages";
const Pictures = (props) => {
    console.log(props)
    return (
        <View>
            <BoxImages data={props.data} />
        </View>
    );
};
const styles = StyleSheet.create({});
export default Pictures;
