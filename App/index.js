// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const workouts = [
    { id: '1', name: 'Push-ups', duration: '10 mins', imageUrl: 'https://picsum.photos/200/150?random=1' },
    { id: '2', name: 'Squats', duration: '15 mins', imageUrl: 'https://picsum.photos/200/150?random=2' },
    { id: '3', name: 'Lunges', duration: '20 mins', imageUrl: 'https://picsum.photos/200/150?random=3' },
    { id: '4', name: 'Plank', duration: '5 mins', imageUrl: 'https://picsum.photos/200/150?random=4' },
    { id: '5', name: 'Sit-ups', duration: '10 mins', imageUrl: 'https://picsum.photos/200/150?random=5' },
];

const WorkoutList = () => {
    return (
        <View style={styles.listContainer}>
            {workouts.map((workout) => (
                <View key={workout.id} style={styles.workoutBox}>
                    <Image source={{ uri: workout.imageUrl }} style={styles.workoutImage} />
                    <Text style={styles.workoutName}>{workout.name}</Text>
                    <Text style={styles.workoutDuration}>{workout.duration}</Text>
                </View>
            ))}
        </View>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Fitness App</Text>
                <WorkoutList />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20, // Margin from top to avoid overlap with status bar
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    workoutBox: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    workoutImage: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    workoutName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    workoutDuration: {
        fontSize: 16,
        color: '#777',
    },
});

export default App;