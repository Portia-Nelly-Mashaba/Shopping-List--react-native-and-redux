import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // import icons

const ShoppingList = () => {
  const data = [
    {
      id: 1,
      name: 'Milk',
      quantity: 2
    },
    {
      id: 2,
      name: 'Bread',
      quantity: 1
    },
    {
      id: 3,
      name: 'Eggs',
      quantity: 12
    }
  ];

  const deleteItem = (id) => {
    // Function to delete item
    console.log("Deleted item with id:", id);
  };

  const editItem = (id) => {
    // Function to edit item
    console.log("Edited item with id:", id);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.quantity}>qty: {item.quantity}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => editItem(item.id)}>
            <Icon name="edit" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Icon name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={data}
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
    marginVertical: 20
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
    elevation: 3
  },
  name: {
    fontSize: 16,
    color: '#333'
  },
  quantity: {
    fontSize: 16,
    color: '#666'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ShoppingList;
