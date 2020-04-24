import React from 'react';
import {StyleSheet, View, ScrollView,Image,Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
const Gallery = (props) => {
    const {data} = props;
    return (
        <View style={styles.gallery}>
            <ScrollView  style={styles.scroll}
                         horizontal={true}
                         pagingEnabled={true}
            >
                {data.map((row,k)=>{
                    return(<View key={k} style={styles.item}>
                        <Image
                            style={styles.image}
                            resizeMode="center"
                            source={{
                            uri:row.url
                        }} />
                    </View>)
                })}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    gallery:{
        flex:1,
        backgroundColor:"#000"
    },
    item:{
        flex:1,
        height: "100%",
        width:width
    },
    image:{
        width:"100%",
        height:"100%"
    }
});
export default Gallery;
