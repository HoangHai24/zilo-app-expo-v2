import React, {useMemo} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import {MaterialIcons,AntDesign} from "@expo/vector-icons"
const TabHeader = (props) => {
    const {name, placeholder, handSearch} = props;
    return (
        <View style={styles.header}>
            <View style={name}
            ><Text>{name}</Text></View>
            <TouchableOpacity style={styles.btn} onPress={()=>{}}>
                <MaterialIcons name="search" size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>{}}>
                <AntDesign name="contacts" size={30} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#c52728",
        flexDirection: "row"
    },
    name:{
      flex: 1
    },
    btn: {
        width: 60,

    }
});
export default TabHeader;
