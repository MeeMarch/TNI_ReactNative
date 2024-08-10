import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

interface NewsItem {
    title: string;
    description: string;
    publishedAt: string; //convert to date local:new Date(item.publishedAt).toLocaleDateString()
    url:string;
  }

const NewsApp = ():React.JSX.Element => {
    const[news,setNews]= useState([]);
    const[loading,setLoading]= useState(true);

    const API_KEY = '653e6c13f9fe4d7fa18459b44ac215e4';
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    useEffect(()=>{
        fetch(URL)
        .then(response => response.json())
        .then(news => {
            setNews(news.articles);
            setLoading(false);
        })
        .catch(error=>{
            console.error(error);
            setLoading(false);
        });
    },[]);

    const _renderItem = ({item}:{item:NewsItem})=>(
        <TouchableOpacity style={styles.card}>
          <Text style={styles.headline}>{item.title}</Text>
          <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      );

  return (
    <View style={styles.container}>
      {loading?( //if still loading will show ActivityIndicator
        <ActivityIndicator size="large" color="red"/>
      ):( //if data already loaded will show FlatList
        <FlatList
        data={news}
        renderItem={_renderItem}
        keyExtractor={item => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: { backgroundColor: "#779ECB", padding: 16 },
  loadingContainer: { justifyContent: "center", alignItems: "center" },
  errorContainer: { justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18, color: "red" },
  card: {
    backgroundColor: "#DDE7F3",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  date: { fontSize: 14, color: "#888", marginBottom: 8 },
  description: { fontSize: 16, color: "#333" },
});
