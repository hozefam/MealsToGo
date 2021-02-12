import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://restaurantden.com/wp-content/uploads/2017/09/pixabay.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5} key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
