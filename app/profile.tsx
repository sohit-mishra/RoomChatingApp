import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


type AppRoute =  | "/login";

type MenuItem = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route? : AppRoute;
};

type ProfileData = {
  name: string;
  email: string;
  profile: string;
};

export default function ProfileScreen() {
  const router = useRouter();

  const profileData: ProfileData = {
    name: "Shane",
    email: "shane.sine@gmail.com",
    profile: "",
  };

  const menu: MenuItem[] = [
    { label: "Personal", icon: "person-outline", },
    { label: "Notification", icon: "notifications-outline" },
    { label: "Help", icon: "help-circle-outline" },
    { label: "Logout", icon: "log-out-outline", route:'/login' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={
            profileData.profile
              ? { uri: profileData.profile }
              : require("@/assets/profile.png")
          }
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => router.push("/#")}
          accessible={true}
          accessibilityLabel="Edit profile picture"
        >
          <Ionicons name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{profileData.name}</Text>
      <Text style={styles.email}>{profileData.email}</Text>

      <View style={styles.statsContainer}>
        <TouchableOpacity
          style={styles.statBox}
          onPress={() => router.push("/join-room")}
          accessible={true}
          accessibilityLabel="Go to Join Room"
        >
          <Ionicons name="people-outline" size={24} color="#007bff" />
          <Text style={styles.statValue}>2.4 k Room</Text>
          <Text style={styles.statLabel}>Join Room</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.statBox}
          onPress={() => router.push("/create-room")}
          accessible={true}
          accessibilityLabel="Go to Create Room"
        >
          <Ionicons name="add-circle-outline" size={24} color="#007bff" />
          <Text style={styles.statValue}>1.4k Room</Text>
          <Text style={styles.statLabel}>Create Room</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.menuContainer}>
        {menu.map((item, index) => (
           <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => item.route && router.push(`${item.route}`)}
          accessible={true}
          accessibilityLabel={`Go to ${item.label}`}
        >
          <Ionicons name={item.icon} size={22} color="#333" style={{ marginRight: 15 }} />
          <Text style={styles.menuText}>{item.label}</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    marginTop: 0,
    flex: 1
  },
  avatarContainer: { position: "relative", marginBottom: 15 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 20,
  },
  name: { fontSize: 22, fontWeight: "bold", color: "#333" },
  email: { fontSize: 14, color: "#666", marginBottom: 25 },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statValue: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  statLabel: { fontSize: 12, color: "#666", marginTop: 2 },

  menuContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: { fontSize: 16, color: "#333" },
});
