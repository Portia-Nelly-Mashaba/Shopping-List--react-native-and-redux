// ShoppingList.js
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { deleteItem } from '../redux/shoppingSlice';

const ShoppingList = () => {
  const items = useSelector(state => state.shopping.items);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteItem({ id }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.quantity}>qty: {item.quantity}</Text>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
        <Icon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
  },
});

export default ShoppingList;
