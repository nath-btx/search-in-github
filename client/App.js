import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, useColorScheme } from 'react-native';

export default function App() {
    const [username, setUsername] = useState("nath-btx");
    const [user, setUser] = useState({});

    async function search() {
        try {
            const response = await fetch(`http://192.168.1.21:4242/api/users/${username}`);
            const user = await response.json();

            setUser(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <View style={styles.containeer}>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
            />
            <Button
                onPress={search}
                title="Search"
                color="#841584"
            />
            <Text>{user.id}</Text>
            <Text>{user.login}</Text>
            <Text>{user.node_id}</Text>
            <Text>{user.avatar_url}</Text>
            <Text>{user.gravatar_url}</Text>
            <Text>{user.url}</Text>
            <Text>{user.html_url}</Text>
            <Text>{user.followers_url}</Text>
            <Text>{user.following_url}</Text>
            <Text>{user.gists_url}</Text>
            <Text>{user.starred_url}</Text>

            <Text>{user.username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 200,
    }
});