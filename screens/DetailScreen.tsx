import {
  View,
  Text,
  ActivityIndicator,
  ListRenderItem,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";
import { ListItem, Tile } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [detail, setDetail] = React.useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  const getProductbyId = async () => {
    try {
      setLoading(true);
      const response = await findProductbyId(route.params.id);
      setDetail(response.data.data);
      //console.log(response.data.data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProductbyId();
    }, [])
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const _renderitem: ListRenderItem<any> = ({ item }) => (
    <>
      <Tile
        imageSrc={{
          uri: "https://anewall.com/cdn/shop/products/mountain-mural-wallpaper-4.jpg",
          cache: "force-cache",
        }}
        title={item.ch_title}
        titleStyle={styles.titleStyle}
        containerStyle={styles.tileContainer}
        caption={item.ch_dateadd}
        captionStyle={styles.captionStyle}
        featured
        activeOpacity={0.9}
        width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
      />
    </>
  );

  return (
    <View>
      <FlatList
        data={detail}
        renderItem={_renderitem}
        keyExtractor={(item: any) => item.ch_id.toString()}
        onRefresh={async () => {
          await getProductbyId();
        }}
        refreshing={loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง​
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน​
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // สีขาวสำหรับชื่อ​
  },
  tileContainer: {
    borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน​
    overflow: "hidden", //กำหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล​
    marginBottom: 10, //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง​
    elevation: 5, // เงาสำหรับ Android​
    shadowOffset: { width: 0, height: 2 }, //กำหนดตำแหน่งของเงาที่แสดงผล​
    shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา ​
    shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา ​
    opacity: 0.7, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก​
  },
  captionStyle: {
    fontSize: 14,
    color: "#000000", // สีขาวสำหรับวันที่​
  },
});
