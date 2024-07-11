import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import CustomButton from '../../components/CustomButton';
import { MenuTabTypes, MenuTabs } from "../../navigation/MenuTab/MenuBottomTab.navigation";

export function Slide1({ navigation }: MenuTabTypes) {
  const handlePress = () => {
    // Lógica a ser executada ao pressionar o botão
    console.log('Botão pressionado!');
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>Lista de Atividades</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.text}>Atividade</Text>
          <Text style={styles.text}>Data</Text>
          <Text style={styles.text}>Situação</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Matemática</Text>
          <Text style={styles.cell}>07/12/2024</Text>
          <View style={styles.botao}>
            <CustomButton title="Feita" onPress={handlePress} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Química</Text>
          <Text style={styles.cell}>08/12/2024</Text>
          <View style={styles.botao}>
            <CustomButton title="Feita" onPress={handlePress} />
          </View>
        </View>
      </View>
    </View>
  );
};