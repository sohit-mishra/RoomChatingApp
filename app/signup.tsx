import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Checkbox, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import GoogleLogo from "../assets/google.svg";
import FacebookLogo from "../assets/facebook.svg";

export default function Signup() {
  const { colors } = useTheme();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <Text style={[styles.title, { color: colors.onSurface }]}>
        Create Account
      </Text>
      <Text style={[styles.subtitle, { color: colors.onSurface }]}>
        Sign up to get started
      </Text>

      {/* Name */}
      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />

      {/* Email */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      {/* Confirm Password */}
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      {/* Terms & Conditions */}
      <View style={styles.row}>
        <Checkbox
          status={agreeTerms ? "checked" : "unchecked"}
          onPress={() => setAgreeTerms(!agreeTerms)}
          color={colors.primary}
        />
        <Text style={{ color: colors.onSurface, alignSelf: "center" }}>
          I agree to the Terms & Conditions
        </Text>
      </View>

      {/* Signup Button */}
      <Button
        mode="contained"
        onPress={() => console.log("Signup with:", email, password)}
        style={styles.signupButton}
        buttonColor={colors.primary}
        textColor={colors.onPrimary}
        disabled={!agreeTerms} // must agree before signing up
      >
        Sign Up
      </Button>

      {/* Social Login */}
      <Text style={[styles.socialText, { color: colors.onSurface }]}>
        Or sign up with
      </Text>

      <View style={styles.socialRow}>
        <Button
          mode="outlined"
          onPress={() => console.log("Google Signup")}
          style={styles.socialButton}
        >
          <View style={styles.socialContent}>
            <GoogleLogo width={22} height={22} style={{ marginRight: 10 }} />
            <Text style={styles.socialLabel}>Google</Text>
          </View>
        </Button>

        <Button
          mode="outlined"
          onPress={() => console.log("Facebook Signup")}
          style={styles.socialButton}
        >
          <View style={styles.socialContent}>
            <FacebookLogo width={22} height={22} style={{ marginRight: 10 }} />
            <Text style={styles.socialLabel}>Facebook</Text>
          </View>
        </Button>
      </View>

      {/* Already have account? */}
      <Button
        mode="text"
        onPress={() => router.push("/login")}
        textColor={colors.primary}
        style={{ marginTop: 10 }}
      >
        Already have an account? Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: { fontSize: 16, marginBottom: 20, textAlign: "center" },
  input: {
    marginBottom: 12,
    backgroundColor: "#ffffff",
  },
  signupButton: { marginTop: 12, padding: 2 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  socialText: { textAlign: "center", marginVertical: 10 },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    paddingVertical: 2,
  },
  socialContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#042d88",
  },
});
