import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {apiGet} from 'src/apis';
import UserItem from "src/components/Items/UserItem";

const HomeScreen = (props) => {
    const [users, setUsers] = useState([]);
    const {chatToken} = props;

    useEffect(() => {
        if (chatToken.status === 200) {
            apiGet('/conversations/get-users', {
                access_token: chatToken.token
            }).then(data => setUsers(data))
                .catch(err => console.log(err.message))
        }

    }, [chatToken]);

    return (
        <FlatList
            data={users}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <UserItem data={item}/>}
        />
    );
};
const mapStateToProps = state => ({
    chatToken: state.chatToken,
    auth: state.auth
});

export default connect(mapStateToProps)(HomeScreen)
