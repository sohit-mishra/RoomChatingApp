import { useState } from "react";
import { View, StyleSheet, Text , Alert} from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import LockScreen from "../assets/lock.svg";

export default function ForgotPassword() {
  const { colors } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSendOtp = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email.");
      return;
    }
    console.log("Sending OTP to:", email);
    router.push("/otp");
  };

  return (
    <View style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <LockScreen width="90%" height={180} style={styles.icon} />

      <Text style={styles.subtitle}>
        Enter your email address and we’ll send you a one-time password (OTP) to
        reset your account.
      </Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button
        mode="contained"
        onPress={handleSendOtp}
        style={styles.resetButton}
        buttonColor={colors.primary}
        textColor={colors.onPrimary}
      >
        Send OTP
      </Button>

      <Button
        mode="text"
        onPress={() => router.back()}
        textColor={colors.primary}
        style={{ marginTop: 12 }}
      >
        Back to Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  icon: {
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 22,
    color: "#424242",
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  resetButton: {
    marginTop: 10,
    paddingVertical: 8,
    width: "100%",
    borderRadius: 6,
  },
});
