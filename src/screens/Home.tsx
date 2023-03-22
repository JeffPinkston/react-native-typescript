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
import AddTodoModal from '../components/AddTodoModal';
import { Props } from '../types/types';

const Home = ({ navigation }: Props) => {
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
            <Pressable
                onPress={() => navigation.navigate('Details')}
                style={[homePageStyles.buttonContainer, homePageStyles.floatingButton, homePageStyles.floatingDetailsButton]}>
                <Text style={homePageStyles.buttonText}>Go to Details</Text>
            </Pressable>
            <AddTodoModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    );
};

export default Home;