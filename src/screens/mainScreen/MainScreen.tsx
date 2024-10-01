import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { TextComponent } from "../../components/TextComponent";
import background from '../../../assets/background.png';

import { styles } from "./MainScreenStyles";
import { StatusBar } from "expo-status-bar";

export function MainScreen() {
  return (
    <ImageBackground
        source={background}
        style={styles.background}
    >
     
    <View style={styles.container}>
      <Image
        source={require("../../../assets/fotoPerfil.jpg")}
        alt={"Perfil picture"}
        style={styles.picture}
      />
      <Text style={[styles.text, {fontWeight:"bold" }]}>Victor Moreira</Text>
      <Text style={[styles.text,{fontWeight: "200", marginBottom: 50}]}>Technical Support and Mobile Developer</Text>
      <TextComponent />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}
