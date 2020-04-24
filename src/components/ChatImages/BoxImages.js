import React from 'react';
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BoxImages = (props) => {
    const {data} = props;
    const navigation = useNavigation();
    return (
        <View style={styles.images}>
            {data.map((row,k)=>(<View style={styles.item} key={k}>
                <TouchableOpacity style={styles.picture} onPress={()=>navigation.navigate("Gallery",{
                    data:data,
                    index:k
                })}>
                    <Image source={{
                        uri: row.url
                    }} style={styles.img} />
                </TouchableOpacity>

            </View>))}
        </View>
    );
};
const styles = StyleSheet.create({
    images:{
        flexWrap:"wrap",
        width: '100%',
        flexDirection:"row",
    },
    item:{
      flex:1,
        flexBasis:"30%",
        padding:2,
        overflow: "hidden"
    },
    picture:{
        paddingBottom: "100%",
        height:0,
        position:"relative",
        overflow:"hidden",
        borderRadius: 5
    },
    img:{
        width:null,
        height:null,
        position: "absolute",
        top:0,
        left:0,
        bottom:0,
        right:0,
        overflow:"hidden",
    }
});
export default BoxImages;
