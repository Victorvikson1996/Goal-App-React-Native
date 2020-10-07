import React from 'react';
import { StyleSheet, Text, View,Modal, TextInput, Button, ScrollView, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';

const GoalItem = (props) => {
    return (
    <TouchableHighlight activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableHighlight>  
    );
}; 

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: '#cccc',
        borderColor: 'black',
        borderWidth: 1,

    }
})

export default GoalItem;
