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
    Details: undefined;
}

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

