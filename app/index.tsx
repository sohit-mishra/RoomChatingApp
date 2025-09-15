import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import ChatHeader from "@/components/ChatHeader";
import { useRouter } from "expo-router";

type Chat = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
};

export default function ChatListScreen() {
  const router = useRouter();

  const chats: Chat[] = [
    {
      id: "1",
      name: "General Chat",
      lastMessage: "Hey, welcome to General Chat!",
      time: "10:30 AM",
    },
    {
      id: "2",
      name: "Tech Talk",
      lastMessage: "Latest tech updates here!",
      time: "09:15 AM",
    },
    {
      id: "3",
      name: "Random Room",
      lastMessage: "This is an older message.",
      time: "Yesterday",
    },
  ];

  const renderItem: ListRenderItem<Chat> = ({ item }) => {
    const firstLetter = item.name.charAt(0).toUpperCase();

    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() =>
          router.push({
            pathname: "/chatmessage/[id]",
            params: { id: item.id },
          })
        }
      >
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarLetter}>{firstLetter}</Text>
        </View>
        <View style={styles.chatDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader />

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push("/join-room")}
        >
          <Text style={styles.linkText}>Join Room</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push("/all-room")}
        >
          <Text style={styles.linkText}>All Room</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push("/my-room")}
        >
          <Text style={styles.linkText}>My Room</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff", marginBottom: 50 },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ffffffff",
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#0f0e0eff",
  },
  linkText: {
    color: "#ffffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarLetter: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  chatDetails: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold", marginBottom: 2 },
  lastMessage: { fontSize: 14, color: "#666" },
  time: { fontSize: 12, color: "#999" },
  separator: { height: 1, backgroundColor: "#eee", marginLeft: 70 , flex: 1},
});
