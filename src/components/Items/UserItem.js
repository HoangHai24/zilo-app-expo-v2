import React, {useMemo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Avatar from "src/components/Avatar/Avatar";

const UserItem = (props) => {
    const {data} = props;
    const navigation = useNavigation();
    const renderAddress = () => {
        if (!data.address) {
            return null;
        }
        const {dis_name, cit_name} = data.address;
        return (<Text style={styles.address}>{dis_name} - {cit_name}</Text>)
    };
    return useMemo(() => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("ChatBox", data)}>
            <View style={styles.avatar}>
                <Avatar uri={data.image} online={data.online}/>
            </View>
            <View style={styles.boxInfo}>
                <Text style={styles.name}>{data.name}</Text>
                {renderAddress()}
            </View>
            <View style={styles.right}>
                <Text style={styles.date}>{data.date}</Text>
            </View>
        </TouchableOpacity>
    ), [data]);
};
const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        width: "100%",
        flex: 1,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    avatar: {
        width: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    boxInfo: {
        flex: 1,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 12
    },
    name: {
        fontSize: 18
    },
    address: {
        color: "#777",
        fontSize: 12
    },
    right: {
        flex: 0,
        paddingRight: 12,
        justifyContent: "center",
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
    },
    date: {
        color: "#999",
        fontSize: 8,
        textAlign: 'right'
    }
});
export default UserItem;
