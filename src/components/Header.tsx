import { Text, View } from "react-native";
import { homePageStyles } from "../styles/styles";

const Header = () => (
    <View style={homePageStyles.headerContainer}>
        <Text style={homePageStyles.headerTitle}>My Todo List</Text>
    </View>
);

export default Header;