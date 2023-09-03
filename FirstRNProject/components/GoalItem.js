import { View,Text,StyleSheet,Pressable } from "react-native"

function GoalItem(props){
    return <View style={styles.goalItem} >
    <Pressable 
    android_ripple={{color: "#dddddd"}}
    onPress={props.deleteItem}
    style={({pressed}) => pressed && styles.pressedItem}
    >
    <Text style={styles.goalText}>{props.item.text}  {'\n'}</Text>
    </Pressable>
    </View>

}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:"#5e0acc",
        color: "white"
      },
      goalText:{
        color: "white"
      },
      pressedItem: {
        opacity: 0.5,
      }
})