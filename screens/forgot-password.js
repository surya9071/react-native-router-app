import React,{Component} from 'react';

import {StyleSheet,Text,View,Button,TextInput,TouchableOpacity,Image,ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
class ForgotPasswordScreen extends Component{
    static navigationOptions = { header: null };
    render(){
        const { navigate } = this.props.navigation; 
        return(
            <ScrollView style={{padding:20,backgroundColor:'#fff'}}>
              <View syle={styles.container}>
              <TouchableOpacity style={{alignSelf:'flex-end'}}
                        onPress={()=>{navigate('SignUpScreen')}}>
                        <Text  style={{color:'#d4d4d4'}}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../screens/images/logo.png')} />
               </View>
                <View>
                    <Text style={{marginLeft:35,color:'#d4d4d4'}}>Welcome Back To</Text>
                    <Text style={{color:'#0099e6',marginLeft:35,fontSize:30}}>
                        SkyDrive
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.inputCss}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    placeholder="Email Address"
                    placeholderTextColor="#d4d4d4"
                    underlineColorAndroid='transparent'
                    />
                <TouchableOpacity style={styles.buttonContainer} 
                        onPress={()=>{
                            this.props.navigation.goBack();
                        }}>
                        <Text  style={styles.buttonText}>Send Link</Text>
                </TouchableOpacity>
                </View>
             </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     marginTop:20,
     backgroundColor:'#fff'
    },
    formContainer:{
        marginTop:20
    }, 
    logo: {
        position:'relative',
        top:2,
        left:-75,
        width: 300,
        height: 100
    },
    inputCss:{
        width:345,
        alignSelf:'center',
        height: 55,
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        color: 'black',
        borderBottomWidth:1,
        borderBottomColor:'#d4d4d4',
        marginTop:20,
        marginBottom:20,
        paddingVertical:10  
    },
    buttonContainer:{
        marginTop:50,
        width:345,
        backgroundColor: '#0099e6',
        paddingVertical: 15,
        alignSelf:'center',
        borderRadius:7

    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize:18
    },
})
export default ForgotPasswordScreen;