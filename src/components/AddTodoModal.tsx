import { DataStore } from "aws-amplify";
import { useState } from "react";
import { Modal, View, Pressable, Text, TextInput } from "react-native";
import { Todo } from "../models";
import homePageStyles from "../styles/styles";

type AddTodo = {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void
}

const AddTodoModel = (props: AddTodo) => {
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
            <View style={homePageStyles.modalContainer}>
                <View style={homePageStyles.modalInnerContainer}>
                    <Pressable onPress={closeModal} style={homePageStyles.modalDismissButton}>
                        <Text style={homePageStyles.modalDismissText}>X</Text>
                    </Pressable>
                    <TextInput
                        onChangeText={setName}
                        placeholder="Name"
                        style={homePageStyles.modalInput}
                    />
                    <TextInput
                        onChangeText={setDescription}
                        placeholder="Description"
                        style={homePageStyles.modalInput}
                    />
                    <Pressable onPress={addTodo} style={homePageStyles.buttonContainer}>
                        <Text style={homePageStyles.buttonText}>Add Todo</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default AddTodoModel;