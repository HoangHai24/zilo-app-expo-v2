import React from 'react';
import {StyleSheet, View} from 'react-native';

const Index = ({online}) => online === 1?(<View style={styles.online}/>): null;
const styles = StyleSheet.create({
    online: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "green",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#fff"
    }
});
Index.defaultProps = {
    online: 0
}
export default Index;
