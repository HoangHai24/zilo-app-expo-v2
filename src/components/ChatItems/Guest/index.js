import React from 'react';
import {StyleSheet, View} from 'react-native';
import Avatar from "src/components/Avatar/Avatar";
import TextMessage from "src/components/ChatItems/Guest/TextMessage";
import Duration from "src/components/ChatItems/Guest/Duration";
import Pictures from "src/components/ChatItems/Guest/Pictures";
import Item from "src/components/ChatItems/Guest/Item";
import BoxImages from "src/components/ChatImages/BoxImages";

const Guest = (props) => {
    const {data} = props;
    const uri = `https://chat.vatgia.vn/avata.php?id=${data.author}`;

    return (
        <View style={styles.box}>
            <View style={styles.avartar}>
                <Avatar size={40} online={1} uri={uri}/>
            </View>
            <View style={styles.guest}>
                <View style={styles.boxChat}>
                    {data.data.map((row, k) => {
                        switch (row.type) {
                            case 'text':
                                return (<Item key={k} index={k}>
                                    <TextMessage data={row}/>
                                </Item>)

                            case 'images_multi':
                                return (<Item key={k} index={k}>
                                    <BoxImages data={row.data}/>
                                </Item>)
                            case 'image':
                                return (<Item key={k} index={k}>
                                    <BoxImages data={[row.data]}/>
                                </Item>)
                            default:
                                console.log(row)

                        }
                    })}
                </View>
                <Duration time={data.time}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        paddingLeft: 12,
        paddingBottom: 12
    },
    avartar: {
        flexDirection: "row",
        width: 46,
        alignItems: 'flex-end',
        paddingBottom: 12
    },
    guest: {
        flex: 1,
        paddingRight: 60
    },
    boxChat: {
        flex: 1,
        flexDirection: "column-reverse",
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'flex-start'
    }
});
export default Guest;
