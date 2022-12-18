import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text,Button,Pressable,TextInput,Image} from 'react-native';


const Stack=createNativeStackNavigator();
const App =() =>
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerStyle: { backgroundColor: "brown" } }}></Stack.Screen>
        <Stack.Screen name="Sign-up" component={SignupScreen} options={{ headerStyle: { backgroundColor: "lightblue" }}}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerStyle: { backgroundColor: "pink" }}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>  
  )
}
export default App;


function LoginScreen({navigation}){
 
  return(
<View style={{backgroundColor:'CornSilk',alignItems:'center',justifyContent:'center'}}>
      <View>
        <Text>LoginScreen</Text>
      </View>
      <View style={{ flex:1,backgroundColor: 'Crimson',height:500,alignItems:'center',justifyContent:'space-around'}}>
      <View style = {{height:100}}></View>
          <Image style={{backgroundColor:'transparent',height:100,width:100}}source={{uri:'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/798/posts/27376/preview_image/firebase@2x.png'}}/>
          <View style = {{height:80}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Username'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Password' secureTextEntry='true'></TextInput>
          <View style = {{height:10}}></View>
          <Pressable style = {{backgroundColor:'blue',width:250,height:20,fontWeight:'bold',alignItems:'center',justifyContent:'center'}} onPress={() => ('Pressed')}>
            <Text>LOGIN</Text>
          </Pressable>
            <Text>You don't have an account? Create one</Text>
          
           </View>
            <Button title="Go to SignupScreen" onPress={()=>navigation.navigate("Sign-up")}/>
     
    </View>
  );
}



function SignupScreen({navigation}){
  
  return(
<View style={{backgroundColor:'DarkOrchid',alignItems:'center',justifyContent:'center'}}>
      <View>
        <Text>SignupScreen</Text>
      </View>
      <View style={{ flex:1,backgroundColor: 'DarkSeaGreen',height:500,alignItems:'center',justifyContent:'space-around'}}>
      <View style = {{height:100}}></View>
      <Image style={{backgroundColor:'transparent',height:100,width:100}}source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F01%2F16%2F24%2F44%2F1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fca%2Fimages%2Fgirl-icon-flat-single-avatar-people-icon-from-the-big-avatar-set-stock-vector%2F116244459&tbnid=FEwmgym4_3vlDM&vet=12ahUKEwjf66X96IP8AhUPaBoKHSmuDLMQMygMegUIARCDAg..i&docid=bn_TKSget0ojAM&w=1000&h=1000&q=avatar%20image&ved=2ahUKEwjf66X96IP8AhUPaBoKHSmuDLMQMygMegUIARCDAg"}}/>
                <View style = {{height:30}}></View>
         <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='First name'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Last name' ></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Email'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Password' secureTextEntry='true'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Confirm Password'></TextInput>
          <View style = {{height:10}}></View>
          <Pressable style = {{backgroundColor:'blue',width:250,height:20,fontWeight:'bold',alignItems:'center',justifyContent:'center'}}  onPress={() => ('Pressed')}>
            <Text>SIGNUP</Text>
          </Pressable>
           </View>
          <Button title="Go to ProfileScreen" onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )

}
function ProfileScreen({navigation}){
  
  return(
      <View style={{backgroundColor:'GoldenRod',alignItems:'center',justifyContent:'center'}}>
            <View>
              <Text>ProfileScreen</Text>
            </View>
            <View style={{ flex:1,backgroundColor: 'IndianRed',height:500,alignItems:'center',justifyContent:'space-around'}}>
            <View style = {{height:100}}></View>
            
            
              <Image style={{backgroundColor:'transparent',height:100,width:100}}source={{uri:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}}/>
                <View style = {{height:30}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Name'></TextInput>
                <View style = {{height:10}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Address'></TextInput>
                <View style = {{height:10}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='City'></TextInput>
                <View style = {{height:10}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='CNIC'></TextInput>
                <View style = {{height:10}}></View>
                </View>
                  <Button title="Go to LoginScreen" onPress={()=>navigation.navigate("Login")}/>
           
          </View>
        );
      }

      