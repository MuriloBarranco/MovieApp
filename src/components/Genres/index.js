import React from "react";
import { View, Text } from "react-native";
import { Container, Name} from './styles';
function Genres({data}) {
  return (
    <Container>
      <Name>{data.name}</Name>
    </Container>
  );
}
export default Genres;
