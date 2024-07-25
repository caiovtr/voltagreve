import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import CustomButton from '../../components/CustomButton';
import { MenuTabTypes, MenuTabs } from "../../navigation/tab.navigation";
import { useAuth } from "../../hook/auth";
import { FontAwesome5 } from "@expo/vector-icons"
export function Perfil({ navigation }: MenuTabTypes) {
  const { user, signOut } = useAuth()
  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{user?.user.name}</Text>
      </View>
      <View style={styles.sociais}>
          <FontAwesome5 name="facebook" size={24} color="black" />
          <Text style={styles.sociaisText}>https://www.facebook.com</Text>
      </View>
      <View style={styles.sociais}>
          <FontAwesome5 name="instagram" size={24} color="black" />
          <Text style={styles.sociaisText}>https://www.instagram.com</Text>
      </View>
      <View style={styles.sociais}>
          <FontAwesome5 name="linkedin" size={24} color="black" />
          <Text style={styles.sociaisText}>https://www.linkedin.com</Text>
      </View>
      <CustomButton title="Sair" type="primary"
        onPressI={async () => await signOut()}
      />
    </View>
  );
};