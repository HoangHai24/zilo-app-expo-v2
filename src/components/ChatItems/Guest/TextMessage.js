import React from 'react';
import {StyleSheet, Text} from 'react-native';
const TextMessage = (props) => {
    return (
        <Text style={styles.text}>
            {props.data.data.text}
        </Text>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        paddingHorizontal:4
    }
});
export default TextMessage;
