import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

const FlatListcallBackend = () => {

    const[data,setData]= useState<User[]>([]);
    const[loading,setLoading]= useState(true);

    //useEffect call data from API
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error(error);
            setLoading(false);
        });
    },[]);

    //function _renderItem use in FlatList
    const _renderItem = ({item}:{item:User})=>(
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      )

  return (
    <View style={styles.container}>
      {loading?( //if still loading will show ActivityIndicator
        <ActivityIndicator size="large" color="red"/>
      ):( //if data already loaded will show FlatList
        <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
