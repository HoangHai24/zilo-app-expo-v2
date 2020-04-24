import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {chatDuration} from "src/libs/functions";

const OwnerDuration = (props) => {
    const {time} = props;
    const [data, setData] = useState(chatDuration(time));

    useEffect(() => {
        const dTime = chatDuration(time);
        setData(dTime)
        if (data.type < 3) {
            const clock = setInterval(() => {
                const dTime = chatDuration(time);
                setData(dTime)
            }, 30000);
            return () => {
                clearInterval(clock)
            }
        }
    }, [time])

    return (
        <Text style={{
            fontSize: 11,
            color: "#888",
            textAlign: "right"
        }}>{data.text}</Text>
    );
};
export default OwnerDuration;
