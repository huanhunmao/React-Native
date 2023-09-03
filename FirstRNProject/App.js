import { useState } from 'react';
import { StyleSheet, Text, View,Button ,TextInput,ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [list, setList] = useState([])
    const [ifShowModal, setIfShowModal] = useState(false)

    function startAddGoalHandler(){
        setIfShowModal(true)
    }

    function hasInputTextChanged(text){
        setEnteredGoalText(text)
    }

    function addList(){
        setList((currentGoal) => [
            ...currentGoal,
            {text:enteredGoalText,id:Math.random().toString() },
        ])
        setEnteredGoalText('') // clean value
        cancelGoal()
    }

    function cancelGoal(){
        setIfShowModal(false)
    }

    function deleteItem(id){
        setList((currentGoal) =>  currentGoal.filter(goal => goal.id !== id)
        )
    }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
        <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
        />
        <GoalInput 
        enteredGoalText={enteredGoalText}
        addGoal= {() => addList()}
        addInput={(text) => hasInputTextChanged(text)}
        cancelGoal={() => cancelGoal()}
        ifShowModal={ifShowModal}
        />
        <View style={styles.textList}>
            <FlatList 
            data={list}
            renderItem={
                // 您应该传递一个函数引用，该函数引用在实际触发时使用正确的 id 调用 deleteItem
                ({item}) => <GoalItem item={item} deleteItem={() => deleteItem(item.id)}/>
                }
            keyExtractor={(item) => item.id }
            >
            </FlatList>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1, // 这个 1 表示 整体的容器占据所有空间
        padding:50,
        paddingHorizontal:16, // 横向
  },
  inputContainer:{
    flex:1, // 占总容器 1份
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor: '#cccccc'
  },
  textList:{
    flex:5, //占 总容器 5份
  },
});
