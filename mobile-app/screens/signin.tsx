import { useState } from "react";
import { TextInput, View  , Text, Pressable , StyleSheet, Dimensions} from "react-native";
const windowWidth = Dimensions.get("window").width;
import { ScrollView } from "react-native-gesture-handler";
export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <ScrollView style={{marginHorizontal:20}}>
        
         <View style={{marginTop:50 }}>
       <View style={{marginBottom:45}}>
       <Text style={{marginTop:50   , fontWeight:"800", fontSize:30 , }}>Sign in</Text>
         <Text style={{color:"#a5a8ab" , fontSize:15 , lineHeight:15 , marginTop:10}}>SIgn in forr next step Should you have any questions or require further information as you proceed, please do not hesitate to reach out to our support</Text>
       </View>
        <Text style={{fontWeight:"600",  fontSize:20, lineHeight:20, marginBottom:10, color:"#666666"}}>Email</Text>

      
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your email"
        />
        <Text style={{fontWeight:"600",  fontSize:20, lineHeight:20, marginBottom:10,  color:"#666666"}}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
       <View style={{display:"flex" , justifyContent:"center" , flexDirection:'row' ,marginHorizontal:20 ,}}>
      <Pressable
        style={{
          backgroundColor: "#0D88C3",
          height: 45,
          width: windowWidth / 1.05,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          borderWidth:1 , 
          borderColor:"grey",
        }}
        // onPress={() => signUpHandle()}
      >
        <Text style={{ color: "#ffff", fontWeight: "800" }}>Signin</Text>
      </Pressable>
      </View>
      
      </View>
      </ScrollView>
     
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    label: {
      marginBottom: 5,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color:"#666666"
    },
  });
  