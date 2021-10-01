import React from "react";
import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { WebView } from "react-native-webview";

import { BackButton, Name } from "./styles";

function ModalLink({ link, title, closeModal }) {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name="x" size={35} color="#FFF"></Feather>

        <Name numberOfLines={1}>{title}</Name>
      </BackButton>

      <WebView source={{ uri: link }} />
    </>
  );
}
export default ModalLink;
