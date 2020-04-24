import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const UserAddress = ({address}) => {
    if (!address) {
        return null;
    }
    const {cit_name, dis_name, dis_pre} = address;
    return (
        <View>
            <Text>{dis_name} - {cit_name} </Text>
        </View>
    );
};
const styles = StyleSheet.create({});
export default UserAddress;
