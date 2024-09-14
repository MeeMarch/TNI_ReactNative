import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ListItem, Avatar } from "@rneui/themed";
import { findAllProduct } from "../services/product-service";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      setProduct(response.data.data);
      //console.log(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const _renderitem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem
          bottomDivider
          onPress={() => {
            navigation.navigate("Detail", {
              id: item.id,
              title: item.title,
            });
          }}
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success" />
        </ListItem>
      </>
      /*{ <View>
        <Text>{item.title}</Text>
        <Text>{item.detail}</Text>
      </View> }*/
    );
  };

  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text> */}
      <FlatList
        data={product}
        renderItem={_renderitem}
        keyExtractor={(Item: any) => Item.id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen;
