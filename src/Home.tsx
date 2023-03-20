import React, { useState, useEffect } from 'react';
import '@azure/core-asynciterator-polyfill';
import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
} from 'react-native'; import { DataStore } from 'aws-amplify';
import { Todo } from './models';

const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Todo List</Text>
    </View>
);

type AddToEvent = {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void
}

const AddTodoModel = (e: AddToEvent) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function addTodo() {
        await DataStore.save(new Todo({ name, description, isComplete: false }));
        e.setModalVisible(false);
        setName('');
        setDescription('');
    }

    function closeModal() {
        e.setModalVisible(false);
    }

    return (
        <Modal
            animationType="fade"
            onRequestClose={closeModal}
            transparent
            visible={e.modalVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalInnerContainer}>
                    <Pressable onPress={closeModal} style={styles.modalDismissButton}>
                        <Text style={styles.modalDismissText}>X</Text>
                    </Pressable>
                    <TextInput
                        onChangeText={setName}
                        placeholder="Name"
                        style={styles.modalInput}
                    />
                    <TextInput
                        onChangeText={setDescription}
                        placeholder="Description"
                        style={styles.modalInput}
                    />
                    <Pressable onPress={addTodo} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Add Todo</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

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

    type TodoItem = {
        item: Todo,
    }

    const renderItem = (todo: TodoItem) => (
        <Pressable
            onLongPress={() => deleteTodo(todo.item)}
            onPress={() => setComplete(!todo.item.isComplete, todo.item)}
            style={styles.todoContainer}>
            <Text>
                <Text style={styles.todoHeading}>{todo.item.name}</Text>
                {`\n${todo.item.description}`}
            </Text>
            <Text style={[styles.checkbox, todo.item.isComplete && styles.completedCheckbox]}>
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

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Header />
            <TodoList />
            <Pressable
                onPress={() => setModalVisible(true)}
                style={[styles.buttonContainer, styles.floatingButton]}
            >
                <Text style={styles.buttonText}>Add Todo</Text>
            </Pressable>
            <AddTodoModel
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#4696ec',
        paddingTop: Platform.OS === 'ios' ? 44 : 0,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 16,
        textAlign: 'center',
    },
    todoContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 2,
        elevation: 4,
        flexDirection: 'row',
        marginHorizontal: 8,
        marginVertical: 4,
        padding: 8,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    todoHeading: {
        fontSize: 20,
        fontWeight: '600',
    },
    checkbox: {
        borderRadius: 2,
        borderWidth: 2,
        fontWeight: '700',
        height: 20,
        marginLeft: 'auto',
        textAlign: 'center',
        width: 20,
    },
    completedCheckbox: {
        backgroundColor: '#000',
        color: '#fff',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        padding: 16,
    },
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: '#4696ec',
        borderRadius: 99,
        paddingHorizontal: 8,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 44,
        elevation: 6,
        shadowOffset: {
            height: 4,
            width: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    modalInnerContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        justifyContent: 'center',
        padding: 16,
    },
    modalInput: {
        borderBottomWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
    modalDismissButton: {
        marginLeft: 'auto',
    },
    modalDismissText: {
        fontSize: 20,
        fontWeight: '700',
    },
});

export default Home;