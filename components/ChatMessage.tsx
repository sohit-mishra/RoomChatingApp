import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type ChatMessageProps = {
  roomName: string;
  onlineCount: number;
  onDelete: () => void;
};

export default function ChatMessage({
  roomName,
  onlineCount,
  onDelete,
}: ChatMessageProps) {
  const router = useRouter();

  const firstLetter = roomName.charAt(0).toUpperCase();

  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#000000ff" />
      </TouchableOpacity>

      <View style={styles.headerLeft}>
        <View style={[styles.avatar, { backgroundColor: randomColor }]}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{roomName}</Text>
          <Text style={styles.headerStatus}>{onlineCount} people online</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons
          name="delete"
          size={28}
          color="#363636ff"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderColor: "#e7e6e6ff",
    borderBottomWidth: 1,
    marginTop: 50,
  },
  backButton: {
    marginRight: 10,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerCenter: { justifyContent: "center" },
  headerTitle: { color: "#000", fontSize: 18, fontWeight: "bold" },
  headerStatus: { color: "#555", fontSize: 12 },
});
