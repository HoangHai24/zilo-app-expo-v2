import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextMessage from "src/components/ChatItems/Owner/TextMessage";
import OwnerDuration from './OwnerDuration';
import Item from "./Item";
import BoxImages from "src/components/ChatImages/BoxImages";
const Owner = (props) => {
    const {data} = props;
    return (
        <View style={styles.box}>
            <View style={styles.owner}>
                {data.data.map((row, k) => {
                    switch (row.type) {
                        case 'text':
                            return (<Item key={k} index={k}>
                                <TextMessage data={row}/>
                            </Item>)

                        case 'images_multi':
                            return (<Item  key={k} index={k}>
                                <BoxImages data={row.data} />
                            </Item>)

                        case 'image':return (<Item  key={k} index={k}>
                            <BoxImages data={[row.data]} />
                        </Item>)

                        default:
                            console.log(row)

                    }
                })}
            </View>
            <OwnerDuration time={data.time}/>
        </View>
    );
};
const styles = StyleSheet.create({
    box:{
      paddingLeft: 80,
      paddingRight: 12,
        paddingBottom: 12
    },
    owner: {
        flexDirection: "column-reverse",
        borderRadius: 20,
        overflow: 'hidden',
        alignItems:"flex-end"
    }
});
export default Owner;
