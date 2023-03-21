import { Todo } from "../models"

export type AddTodo = {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void
}

export type TodoItem = {
    item: Todo,
}