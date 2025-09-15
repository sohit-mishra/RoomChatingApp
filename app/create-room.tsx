import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import CreateRoomIcon from "@/assets/createRoom.svg";

export default function CreateRoom() {
  const [roomSlug, setRoomSlug] = useState("");
  const router = useRouter();

  const handleCreateRoom = () => {
    if (!roomSlug.trim()) return;
    console.log("Room Created:", roomSlug);
    router.push(`/`);
  };

  return (
    <View style={styles.container}>
      <CreateRoomIcon width={200} height={200} style={{ marginBottom: 20 }} />
      <Text style={styles.title}>Create a New Room</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Room Name"
        placeholderTextColor="#888"
        value={roomSlug}
        onChangeText={setRoomSlug}
      />

      <TouchableOpacity
        style={[styles.button, !roomSlug.trim() && { backgroundColor: "#ccc" }]}
        onPress={handleCreateRoom}
        disabled={!roomSlug.trim()}
      >
        <Text style={styles.buttonText}>Create Room</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
