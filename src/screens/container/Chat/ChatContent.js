import React, {useEffect, useState} from 'react';
import {View, FlatList,useWindowDimensions} from 'react-native';
import {apiGet} from "src/apis";
import {connect} from "react-redux";
import {resetNewMessage} from "src/store/actions";
import {groupMessage, pushMessage} from "src/libs/functions";
import ChatItem from "src/components/ChatItems";

const ChatContent = (props) => {
    const [data, setData] = useState([]);
    const [refreshing,setRefresh] = useState(false)
    const {newMessage, con_id, resetNewMessage} = props;
    const {height} = useWindowDimensions();
    useEffect(() => {
        apiGet('/messages', {
            to_id: props.toId,
            access_token: props.chatToken.token,
            limit:30
        }).then(data => {
            setData(groupMessage(data));
        });
    }, []);

    useEffect(() => {

        if (newMessage.status === 200 && newMessage.data.con_id === con_id) {
           const datas  =pushMessage(newMessage.data.data, data);
            setData(datas);
            resetNewMessage();
        }
    }, [newMessage]);
    const renderItem = ({item}) =>{
        return (<ChatItem data={item} auth={props.auth}/>)
    }
    const handleRefresh = () =>{
        console.log('refresh')
    }
    const handleLoadMore = (event) =>{
        if(event.nativeEvent.contentOffset.y+event.nativeEvent.layoutMeasurement.height + 100  > event.nativeEvent.contentSize.height){
            console.log('load more');
        }

    }
    return (
        <View style={{flex: 1,backgroundColor: "#fff"}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                inverted={true}
                onRefresh={handleRefresh}
                onEndReachedThreshold={100}
                onMomentumScrollEnd={handleLoadMore}
                refreshing={refreshing}
            />
        </View>
    );
};
const mapStateToProps = state => ({
    chatToken: state.chatToken,
    newMessage: state.newMessage,
    auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    resetNewMessage: () => dispatch(resetNewMessage())
})
export default connect(mapStateToProps, mapDispatchToProps)(ChatContent);
