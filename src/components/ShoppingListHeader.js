import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";


const ShoppingListHeader = () => {
  const [list, setList] = React.useState("");
  const [quantity, setQuantity] = React.useState("");

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        My Shopping List
      </Text>

      <View 
        style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
      <TextInput
        style={{
          height: 40,
          width: '80%',
          margin: 20,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#f0f0f0',
          fontSize: 16,
          color: '#333',
        }}
        placeholder="Enter item"
        placeholderTextColor="#888"
        onChangeText={setList}
        value={list}
      />

      <TextInput
        style={{
          height: 40,
          width: '80%',
          margin: 20,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#f0f0f0',
          fontSize: 16,
          color: '#333',
        }}
        placeholder="Enter quantity"
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={setQuantity}
        value={quantity}
      />

      <TouchableOpacity
        style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 10,
            width: '80%',
            alignItems: 'center',
        }}
            onPress={() => {
                setList("");
                setQuantity("");
            }}>
                <Text style={{color: 'white'}}>Add to List</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingListHeader;
