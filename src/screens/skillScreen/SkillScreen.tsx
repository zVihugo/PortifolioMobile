import React from "react";
import { View, Text, Image, ImageBackground, Alert , TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./SkillScreenStyles";
import { Linking } from "react-native";
import background from '../../../assets/background.png';

export function SkillScreen({navigation} : any) {
  const renderStars = (rating: number) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => {
      return (
        <Icon
          key={index}
          name={index < rating ? "star" : "star-o"}
          size={20}
          color="#FFD700"
        />
      );
    });
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = "5543996699809"; 
    const message = "Olá, gostaria de falar com você!";
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert(
            "Erro",
            "WhatsApp não está instalado ou o link é inválido."
          );
        }
      })
      .catch((err) => console.error("Erro ao abrir o WhatsApp", err));
  };

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
        <Text style={styles.sectionTitle}>Minhas Habilidades</Text>

        <View style={styles.skillContainer}>
          <Text style={styles.skillText}>REACT:</Text>
          <View style={styles.starsContainer}>{renderStars(4)}</View>
        </View>

        <View style={styles.skillContainer}>
          <Text style={styles.skillText}>CSS:</Text>
          <View style={styles.starsContainer}>{renderStars(3)}</View>
        </View>

        <View style={styles.skillContainer}>
          <Text style={styles.skillText}>TYPESCRIPT:</Text>
          <View style={styles.starsContainer}>{renderStars(3)}</View>
        </View>
        <View style={styles.skillContainer}>
          <Text style={styles.skillText}>REACTNATIVE:</Text>
          <View style={styles.starsContainer}>{renderStars(4)}</View>
        </View>
        <View style={styles.skillContainer}>
          <Text style={styles.skillText}>TYPESCRIPT:</Text>
          <View style={styles.starsContainer}>{renderStars(3)}</View>
        </View>

        <TouchableOpacity onPress={handleWhatsAppPress}>
            <Text style={styles.botoms}>Contato</Text>
         </TouchableOpacity>   
      </View>
      
    </ImageBackground>
  );
}
