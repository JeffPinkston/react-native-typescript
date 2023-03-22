import { DataStore } from "aws-amplify";
import { useState } from "react";
import { Modal, View, Pressable, Text, TextInput } from "react-native";
import { Todo } from "../models";
import { addTodoModalStyles, buttonStyles, homePageStyles } from "../styles/styles";
import { AddTodo } from "../types/types";
import 'react-native-gesture-handler';

const AddTodoModal = (props: AddTodo) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function addTodo() {
        await DataStore.save(new Todo({ name, description, isComplete: false }));
        props.setModalVisible(false);
        setName('');
        setDescription('');
    }

    function closeModal() {
        props.setModalVisible(false);
    }

    return (
        <Modal
            animationType="fade"
            onRequestClose={closeModal}
            transparent
            visible={props.modalVisible}
        >
            <View style={addTodoModalStyles.modalContainer}>
                <View style={addTodoModalStyles.modalInnerContainer}>
                    <Pressable onPress={closeModal} style={addTodoModalStyles.modalDismissButton}>
                        <Text style={addTodoModalStyles.modalDismissText}>X</Text>
                    </Pressable>
                    <TextInput
                        onChangeText={setName}
                        placeholder="Name"
                        style={addTodoModalStyles.modalInput}
                    />
                    <TextInput
                        onChangeText={setDescription}
                        placeholder="Description"
                        style={addTodoModalStyles.modalInput}
                    />
                    <Pressable onPress={addTodo} style={buttonStyles.buttonContainer}>
                        <Text style={buttonStyles.buttonText}>Add Todo</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default AddTodoModal;