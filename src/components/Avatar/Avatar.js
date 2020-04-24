import React,{useMemo} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import OnlineStatus from 'src/components/OnlineStatus';

const Avatar = ({uri, size, online}) => useMemo(()=>(
    <View style={[styles.box, {
        width: size,
        height: size,
        borderRadius: size / 2
    }]}>
        <Image source={{uri}} style={[styles.img, {
            borderRadius: size / 2
        }]}/>
        <View style={styles.status}><OnlineStatus online={online}/></View>
    </View>
),[uri, size, online]);
const styles = StyleSheet.create({
    box: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff",
        backgroundColor: "#ddd",
        position: "relative"
    },
    img: {
        width: '100%',
        height: '100%',
    },
    status: {
        position: "absolute",
        bottom: 2,
        zIndex: 100,
        right: 1
    }
});
Avatar.defaultProps = {
    size: 50,
    uri: "",
    online: 0
};
export default Avatar;
