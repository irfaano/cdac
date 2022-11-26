import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions, 
TouchableOpacity, Button, Alert, Image, ImageBackground, StatusBar} from 'react-native';
import bgimg from './assets/plage.jpg';

export default class App extends Component<Props> {

  constructor(props) {
    super();

    var {height, width} = Dimensions.get('window');
    this.state = {screenHeight: height, screenWidth: width,
    Usrname: '',
    email : '',
    password: '',};
}

onClickListener = (viewId) => {
   Alert.alert(this.state.Usrname+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
}

render() {
   return (
       <ImageBackground
          source={bgimg}
          imageStyle={{resizeMode: 'stretch'}}
          style={{width: '100%', height: '100%'}}>

       <StatusBar
          backgroundColor="#0B7600"
          barStyle="light-content"/>

       <View style={styles.container}>

          <Text style={styles.input}>Welcome to Mauritius</Text>          

       <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
           placeholder="Username"
           keyboardType="email-address"
           underlineColorAndroid='transparent'
           onChangeText={(Usrname) => this.setState({Usrname})}/>
       </View>
       <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
           placeholder="Email"
           keyboardType="email-address"
           underlineColorAndroid='transparent' 
           onChangeText={(email) => this.setState({email})}/>
       </View>

       <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
           placeholder="Password"
           secureTextEntry={true}
           underlineColorAndroid='transparent'
           onChangeText={(password) => this.setState({password})}/>
       </View>

       <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Register</Text>
       </TouchableOpacity>

      </View>
    </ImageBackground>
   );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    },
  input: {
     margin: 15,
     fontSize: 20,
     marginBottom : 30,
     color : 'white'
    },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 60,
    },
  submitButtonText:{
     color: '#FFFFFF',
     backgroundColor: '#3462FD',
     width:100,
     height:45,
     borderRadius:10,
     justifyContent: 'center',
     alignItems: 'center'
    },
  signUpText:{
     color: '#FFFFFF',
     alignItems: 'center'
  },
  inputContainer: {
     borderBottomColor: '#05C203',
     backgroundColor: '#FFFFFF',
     borderRadius:5,
     borderBottomWidth: 1,
     width:300,
     height:45,
     marginBottom:20,
     flexDirection: 'row',
     alignItems:'center'
  },
  inputs:{ 
     height:45,
     marginLeft:16,
     borderBottomColor: '#FFFFFF',
     flex:1,
  },
})
