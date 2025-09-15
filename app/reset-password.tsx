import { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import ResetPasswordIcon from "../assets/resetpassword.svg";

export default function ResetPassword() {
  const { colors } = useTheme();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid = password.length >= 6 && password === confirmPassword;

  const handleReset = () => {
    console.log("New Password:", password);
    router.push("/login"); // Navigate back to login
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: "#fff" }]}>
        <ResetPasswordIcon width={150} height={150} style={styles.icon} />

        <Text style={[styles.title, { color: colors.onSurface }]}>
          Reset Password
        </Text>
        <Text style={[styles.subtitle, { color: colors.onSurface }]}>
          Enter your new password below.
        </Text>

        {/* Validation Feedback */}
        {password && password.length < 6 && (
          <Text style={styles.errorText}>
            Password must be at least 6 characters
          </Text>
        )}
        {confirmPassword && password !== confirmPassword && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}

        {/* Password Inputs */}
        <TextInput
          label="New Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />

        {/* Reset Button */}
        <Button
          mode="contained"
          onPress={handleReset}
          style={styles.resetButton}
          buttonColor={colors.primary}
          textColor={colors.onPrimary}
          disabled={!isValid}
        >
          Reset Password
        </Button>

        {/* Back to Login */}
        <Button
          mode="text"
          onPress={() => router.push("/login")}
          textColor={colors.primary}
          style={{ marginTop: 10 }}
        >
          Back to Login
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
    container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  icon: { marginBottom: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  input: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  resetButton: {
    marginTop: 10,
    width: "100%",
    paddingVertical: 6,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
});
