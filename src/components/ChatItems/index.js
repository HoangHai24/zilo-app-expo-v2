import React, {useMemo} from 'react';
import Owner from "src/components/ChatItems/Owner";
import Guest from "src/components/ChatItems/Guest";

const ChatItem = (props) => {
    const {data, auth} = props;
    if (auth.data.id === data.author) {
        return useMemo(() => <Owner data={data}/>, [data])
    }
    return useMemo(() => <Guest data={data}/>, [data])
};
export default ChatItem;
