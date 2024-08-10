import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

interface UserItem {
  id: string;
  name: string;
  email: string;
}
const FlashListExample = (): React.JSX.Element => {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  interface RenderItemProps{
    item:UserItem
  }

  const _renderItem = ({item}:RenderItemProps)=>(
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={user} //กำหนด data to FlatList
        renderItem={_renderItem} //function for _renderItem
        keyExtractor={(item)=>item.id} //key for each Item

      />
    </View>
  );
};

export default FlashListExample;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});
