import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Pressable, Text, FlatList } from "react-native";
import { Todo } from "../models";
import { homePageStyles, todoListStyles } from "../styles/styles";
import { TodoItem } from "../types/types";

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Todo).subscribe((snapshot) => {
            const { items, isSynced } = snapshot;
            setTodos(items);
        });

        return function cleanup() {
            subscription.unsubscribe();
        }

    }, []);

    async function deleteTodo(todo: Todo) {
        try {
            await DataStore.delete(todo);
        } catch (e) {
            console.log('Delete failed: $e');
        }
    }

    async function setComplete(updatedValue: boolean, todo: Todo) {
        await DataStore.save(
            Todo.copyOf(todo, (updated) => {
                updated.isComplete = updatedValue;
            })
        );
    }

    const renderItem = (todo: TodoItem) => (
        <Pressable
            onLongPress={() => deleteTodo(todo.item)}
            onPress={() => setComplete(!todo.item.isComplete, todo.item)}
            style={todoListStyles.todoContainer}>
            <Text>
                <Text style={todoListStyles.todoHeading}>{todo.item.name}</Text>
                {`\n${todo.item.description}`}
            </Text>
            <Text style={[homePageStyles.checkbox, todo.item.isComplete && homePageStyles.completedCheckbox]}>
                {todo.item.isComplete ? '✓' : ''}
            </Text>
        </Pressable>
    );

    return (
        <FlatList
            data={todos}
            keyExtractor={({ id }) => id}
            renderItem={renderItem}
        />
    );
};

export default TodoList;