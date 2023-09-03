import { View,TextInput,StyleSheet,Button,Modal,Image } from "react-native"

function GoalInput(props){
    return         (
    <Modal visible={props.ifShowModal} animationType="slide">
     <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
    <TextInput 
    placeholder="Your good goal!" 
     style={styles.inputText}
      onChangeText={(text) => props.addInput(text)}
      value={props.enteredGoalText} // Bind the input value to enteredGoalText
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
      <Button  title="Add Goal" onPress={() => props.addGoal()}  color="#5e0acc"/>
        </View>
        <View style={styles.button}>
         <Button title="Cancel" onPress={() => props.cancelGoal()}  color="#f31282"/>
        </View>
      </View>
        </View>
        </Modal>
)
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1, // 占总容器 1份
        flexDirection:'column', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#311b6b',
      },
    inputText:{
        borderWidth:1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width: '70%',
        padding:8,
        marginRight:8
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:8
      },
      button:{
        width: 100,
        marginHorizontal:9
      },
      image: {
        width: 100,
        height:100,
      }
})