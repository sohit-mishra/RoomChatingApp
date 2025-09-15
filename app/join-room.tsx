import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Room = {
  _id: string;
  name: string;
  slug: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
  lastMessage: string;
};

const rooms: Room[] = [
  {
    _id: "68c1a03d908373310ee905d1",
    name: "General Chat",
    slug: "general-chat",
    members: ["user1"],
    createdAt: "2025-09-10T15:58:53.947+00:00",
    updatedAt: "2025-09-08T15:58:53.947+00:00",
    lastMessage: "Hey, welcome to General Chat!",
  },
  {
    _id: "68c1a03d908373310ee905d2",
    name: "Tech Talk",
    slug: "tech-talk",
    members: ["user2", "user3"],
    createdAt: "2025-09-10T15:58:53.947+00:00",
    updatedAt: "2025-09-08T15:58:53.947+00:00",
    lastMessage: "Latest tech updates here!",
  },
  {
    _id: "68c1a03d908373310ee905d3",
    name: "Random Room",
    slug: "random-room",
    members: ["user4"],
    createdAt: "2025-09-08T15:58:53.947+00:00",
    updatedAt: "2025-09-08T15:58:53.947+00:00",
    lastMessage: "This is an older message.",
  },
];

function formatTime(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  if (isToday) {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } else if (isYesterday) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
}

export default function JoinRoomList() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: Room }) => {
    const firstLetter = item.name.charAt(0).toUpperCase();

    return (
      <TouchableOpacity
        style={styles.roomItem}
        onPress={() =>
          router.push({
            pathname: "/chatmessage/[id]",
            params: { id: item._id },
          })
        }
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>

        <View style={styles.roomDetails}>
          <Text style={styles.roomName}>{item.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage || "No messages yet"}
          </Text>
        </View>

        <Text style={styles.time}>{formatTime(item.updatedAt)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: insets.bottom + 20,
          paddingHorizontal: 10,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -55,
  },
  roomItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  roomDetails: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
  },
  time: {
    fontSize: 12,
    color: "#999",
    marginLeft: 8,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginLeft: 70,
  },
});
