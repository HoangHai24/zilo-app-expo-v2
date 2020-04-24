import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from "src/routes/AuthRoutes";
import StackRoutes from "src/routes/StackRoutes";
import SocketProvider from 'src/contexts/SocketContext';

const Routes = (props) => {
    if (props.auth.status === 200) {
        return (
            <SocketProvider channels={[props.auth.id]}>
                <NavigationContainer>
                    <StackRoutes/>
                </NavigationContainer>
            </SocketProvider>

        )
    }
    return (
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes);
