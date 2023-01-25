import { StyleSheet, Text, View, TouchableOpacity,Image,Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
                    {  console.log('HomeScreen')}
      <View style={{ justifyContent: 'space-evenly', top: '30%', bottom: '50%'}}>
         <TouchableOpacity onPress={() => navigation.navigate('GameWindow',{player:1})} style={styles.button} >
             <Text style={styles.buttonText}>
                1 player
             </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('GameWindow',{player:2})} style={styles.button}>   
             <Text style={styles.buttonText}>
              2 players
             </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:25,
    paddingVertical:25,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  title: {
    top:0,
    textTransform:"uppercase",
    color:"white",
    fontSize:30,
    // marginBottom:'20%',
    borderStyle:'solid',
    borderColor:'white',
    // borderWidth: 0.3,
  },
  button: {
    width:150,
    height:40,
    backgroundColor:'#000',
    borderRadius:15,
    alignItems: 'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderColor:'white',
    borderWidth: 2,
    marginBottom: '15%'
  },
  buttonText: {
    color:"white",
    fontSize:20,
  }
});
