import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const DocumentStack = createStackNavigator();

const DocumentStackScreen = ({navigation}) => (
    <DocumentStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#F18A6B',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DocumentStack.Screen name="Document" component={DocumentScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#F18A6B" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DocumentStack.Navigator>
);


const DocumentScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Documents Screen</Text>
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default DocumentStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
