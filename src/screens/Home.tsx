import React, { useState } from 'react';
import '@azure/core-asynciterator-polyfill';
import {
    Button,
    Pressable,
    StatusBar,
    Text,
} from 'react-native';
import { homePageStyles } from '../styles/styles';
import TodoList from '../components/TodoList';
import AddTodoModel from '../components/AddTodoModal';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <StatusBar />
            <TodoList />
            <Pressable
                onPress={() => setModalVisible(true)}
                style={[homePageStyles.buttonContainer, homePageStyles.floatingButton]}
            >
                <Text style={homePageStyles.buttonText}>Add Todo</Text>
            </Pressable>

            <AddTodoModel
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    );
};

export default Home;