import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';


import { styles } from './styles';


export const TextComponent = ({navigation}: any) => {
    const handlePressGithub = () => {
        Linking.openURL("https://github.com/zVihugo");
    }

    const handlePressLinkedin = () => {
        Linking.openURL("https://www.linkedin.com/in/victor-moreira-ab8923229/");
    }

    const handlePressInstagram = () => {
        Linking.openURL("https://www.instagram.com/victor_morei/");
    }


  return (
    <>
        <TouchableOpacity>
            <Text style={styles.botoms}onPress={handlePressLinkedin}>Linkedin</Text>    
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.botoms} onPress={handlePressGithub}>Github</Text>    
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.botoms}onPress={handlePressInstagram}>Instagram</Text>    
        </TouchableOpacity>
    </>
  );
}