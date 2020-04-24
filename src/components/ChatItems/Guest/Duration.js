import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {chatDuration} from "src/libs/functions";

const Duration = (props) => {
    const {time} = props;
    const [data, setData] = useState(chatDuration(time, 1));
    useEffect(() => {
        const dTime = chatDuration(time, 1);
        setData(dTime)
        if (data.type < 3) {
            const clock = setInterval(() => {
                const dTime = chatDuration(time, 1);
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
            color: "#888"
        }}>{data.text}</Text>
    );
};
const styles = StyleSheet.create({});
export default Duration;
