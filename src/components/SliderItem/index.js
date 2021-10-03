import React from "react";
import { View, Text } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

import { Container, BannerItem, Title, RateContainer, Rate } from "./styles";
import { useNavigation } from "@react-navigation/native";

function SliderItem({ data, navigatePage }) {
  const navigation = useNavigation();

  return (
    //Passando o navigatePage para navegar no filme escolhido
    <Container activeOpacity={0.7} onPress={ () => navigatePage(data) } >

      <BannerItem 
      source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
      />

      <Title numberOfLines={1}>{data.title}</Title>

      <RateContainer>
        <Icons name="star" size={12} color="#E7A74e" />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  );
}
export default SliderItem;
