import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: v4(), text: 'Milk'},
    {id: v4(), text: 'Eggs'},
    {id: v4(), text: 'Tomatoes'},
    {id: v4(), text: 'Toothbrush'},
  ]);

  const deleteItem = (id) => {
    console.log(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(items);
    console.log(v4());
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please enter an item',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      setItems((prevItems) => {
        return [{id: v4(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} key={item.id} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
