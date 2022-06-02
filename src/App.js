import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import TodoCard from './components/TodoCard';

const App = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, todo: 'React native', isDone: false},
  ]);
  const [todo, setTodo] = useState('');

  const renderTodo = ({item}) => {
    return (
      <Pressable
        style={styles.todo_card}
        onLongPress={() => {
          removeTodo(item);
        }}
        delayLongPress="1000">
        <Text style={styles.todo_text}>{item.todo}</Text>
      </Pressable>
    );
  };
  const removeTodo = item => {
    const newTodoList = todoList.deleteItem(todo => +todo.id === +item.id);
    setTodoList(newTodoList);
  };
  const addNewTask = () => {
    setTodoList([
      ...todoList,
      {id: todoList.length + 1, todo: todo, isDone: false},
    ]);
    console.log('TODOLİST', todoList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}> {todoList.length}</Text>
      </View>
      <View style={styles.list_container}>
        <FlatList
          keyExtractor={item => item.id}
          data={todoList}
          renderItem={renderTodo}
        />
      </View>
      <View style={styles.todo_container}>
        <TodoCard
          addNewTask={addNewTask}
          todo={todo}
          setTodo={setTodo}></TodoCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title_container: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  list_container: {
    flex: 14,
  },
  todo_container: {
    flex: 3,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    color: '#DD8419',
    fontSize: 25,
    fontWeight: 'bold',
  },
  todo_card: {
    backgroundColor: '#7da352',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  todo_text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default App;
