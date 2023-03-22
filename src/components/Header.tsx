import { Text, View } from "react-native";
import { headerStyles, homePageStyles } from "../styles/styles";

const Header = () => (
    <View style={headerStyles.headerContainer}>
        <Text style={headerStyles.headerTitle}>My Todo List</Text>
    </View>
);

export default Header;