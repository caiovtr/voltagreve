import { View, Text, Image } from "react-native";
import { styles } from "./styles"
import CustomButton from '../../components/CustomButton';


export function Slide2() {
  const handlePress = () => {
    // Lógica a ser executada ao pressionar o botão
    console.log('Botão pressionado!');
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>Atividades Feitas</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.text}>Atividade</Text>
          <Text style={styles.text}>Data</Text>
          <Text style={styles.text}>Situação</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Redação</Text>
          <Text style={styles.cell}>05/12/2024</Text>
          <View style={styles.botao}>
            <CustomButton title="Feita" onPress={handlePress} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Geografia</Text>
          <Text style={styles.cell}>04/12/2024</Text>
          <View style={styles.botao}>
            <CustomButton title="Feita" onPress={handlePress} />
          </View>
        </View>
      </View>
    </View>
  );
};