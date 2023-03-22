import React, { useState } from 'react';
import '@azure/core-asynciterator-polyfill';
import {
    Pressable,
    StatusBar,
    Text,
} from 'react-native';
import { buttonStyles, homePageStyles } from '../styles/styles';
import TodoList from '../components/TodoList';
import AddTodoModal from '../components/AddTodoModal';
import { HomeScreenNavigationProp } from '../types/types';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <>
            <StatusBar />
            <TodoList />
            <Pressable
                onPress={() => setModalVisible(true)}
                style={[buttonStyles.buttonContainer, homePageStyles.floatingButton]}
            >
                <Text style={buttonStyles.buttonText}>Add Todo</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Details', { title: 'Details Screen' })}
                style={[buttonStyles.buttonContainer, homePageStyles.floatingButton, homePageStyles.floatingDetailsButton]}>
                <Text style={buttonStyles.buttonText}>Go to Details</Text>
            </Pressable>
            <AddTodoModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    );
};

export default Home;