import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import * as Facebook from 'expo-facebook';
import {connect} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';
import {AUTH_STORAGE} from "src/constants/storages";
import {socialLogin, tokenLogin} from "src/store/actions";


const Login = (props) => {
    const {auth, tokenLogin, socialLogin} = props;
    useEffect(() => {
        AsyncStorage.getItem(AUTH_STORAGE).then(token => {
            tokenLogin(token);
        })
    }, []);

    const facebookLogin = async () => {
        try {
            await Facebook.initializeAsync('194919957856100');
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                socialLogin(token, 'facebook');
            } else {
                Alert.alert('Zilo', 'Đăng nhập không thành công');
            }
        } catch ({message}) {
            console.log(message)
        }
    }
    const googleLogin = () => {

    }
    if (auth.status === 401) {
        return (
            <View style={styles.screen}>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.facebook} onPress={facebookLogin}>
                        <View style={styles.icon}>
                            <Ionicons name="logo-facebook" size={30} color="#fff"/>
                        </View>
                        <Text style={styles.text}>Đăng nhập bằng Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google} onPress={googleLogin}>
                        <View style={styles.icon}>
                            <Ionicons name="logo-google" size={30} color="#fff"/>
                        </View>
                        <Text style={styles.text}>Đăng nhập bằng Google </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (<View style={styles.screen}>
        <Text>Loading...</Text>
    </View>)

};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: 220
    },
    facebook: {
        flexDirection: "row",
        backgroundColor: "rgb(24,119,242)",
        paddingVertical: 3,
        borderRadius: 3,
        marginVertical: 6,
        width: '100%'
    },
    google: {
        flexDirection: "row",
        backgroundColor: "#D34836",
        paddingVertical: 3,
        borderRadius: 3,
        marginVertical: 6,
        width: '100%'
    },
    icon: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: "rgba(255,255,255,0.2)"
    },
    text: {
        height: 40,
        lineHeight: 40,
        paddingHorizontal: 12,
        color: "#fff",
        fontSize: 18,
        flex: 1
    }
});

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    tokenLogin: (token) => dispatch(tokenLogin(token)),
    socialLogin: (token, type) => dispatch(socialLogin(token, type))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
