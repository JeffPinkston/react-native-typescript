import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Todo } from "../models"

export type AddTodo = {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void
}

export type TodoItem = {
    item: Todo,
}

export type RootStackParamList = {
    Home: undefined;
    Details: { title: string };
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProp = HomeScreenProps['navigation'];

export type HomeScreenRouteProp = HomeScreenProps['route'];

