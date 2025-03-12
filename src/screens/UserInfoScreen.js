
import React, { useEffect, useState } from "react";
import {
  View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet
} from "react-native";
import { fetchUsers } from "../api/apiService"; // Import API function

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const user = users[currentIndex];

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.first_name} {user.last_name}</Text>

      {/* Form Fields with Titles */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value={user.username} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value={user.first_name} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value={user.last_name} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={user.email} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={user.password} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID</Text>
        <TextInput style={styles.input} value={String(user.id)} editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>UID</Text>
        <TextInput style={styles.input} value={user.uid} editable={false} />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, currentIndex === 0 && styles.disabledButton]}
          onPress={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, currentIndex === users.length - 1 && styles.disabledButton]}
          onPress={() => setCurrentIndex(prev => Math.min(users.length - 1, prev + 1))}
          disabled={currentIndex === users.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#DDD"
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20
  },
  inputContainer: {
    width: "90%",
    marginBottom: 10
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333"
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  button: {
    backgroundColor: "#6A5ACD",
    padding: 12,
    margin: 5,
    borderRadius: 10,
    minWidth: 120,
    alignItems: "center"
  },
  disabledButton: {
    backgroundColor: "gray"
  },
  buttonText: {
    color: "white",
    fontSize: 16
  },
});


