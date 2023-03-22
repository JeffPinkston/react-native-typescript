import { Platform, StyleSheet } from "react-native";

export const globalAppStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});

export const headerStyles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#4696ec',
        paddingTop: Platform.OS === 'ios' ? 36 : 0,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 16,
        textAlign: 'center',
    },
});

export const todoListStyles = StyleSheet.create({
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
});

export const homePageStyles = StyleSheet.create({
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
    floatingButton: {
        position: 'absolute',
        bottom: 88,
        elevation: 6,
        shadowOffset: {
            height: 4,
            width: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    floatingDetailsButton: {
        bottom: 22,
    },
});

export const buttonStyles = StyleSheet.create({
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
});

export const addTodoModalStyles = StyleSheet.create({
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


export const detailsPageStyles = StyleSheet.create({

});