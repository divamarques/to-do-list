import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Home() {
  return(
    <View style={styles.container} >
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa..."
          placeholderTextColor='#808080'
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>
            Criadas
          </Text>
          <View style={styles.numberContainer}>
            <Text style={styles.counterNumber}>
              0
            </Text>
          </View>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>
            Concluídas 
          </Text>
          <View style={styles.numberContainer}>
            <Text style={styles.counterNumber}>
              0 
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}