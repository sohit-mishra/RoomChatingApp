import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Checkbox, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import GoogleLogo from "../assets/google.svg";
import FacebookLogo from "../assets/facebook.svg";

export default function Login() {
  const { colors } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <Text style={[styles.title, { color: colors.onSurface }]}>
        Welcome Back!
      </Text>
      <Text style={[styles.subtitle, { color: colors.onSurface }]}>
        Sign in to your account
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

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

     
      <View style={styles.row}>
        <View style={styles.rememberRow}>
          <Checkbox
            status={rememberMe ? "checked" : "unchecked"}
            onPress={() => setRememberMe(!rememberMe)}
            color={colors.primary}
          />
          <Text style={{ color: colors.onSurface, alignSelf: "center" }}>
            Remember me
          </Text>
        </View>

        <Button
          mode="text"
          onPress={() => router.push("/forgot-password")}
          textColor={colors.primary}
        >
          Forgot password?
        </Button>
      </View>

      
      <Button
        mode="contained"
        onPress={() => router.replace("/")}
        style={styles.loginButton}
        buttonColor={colors.primary}
        textColor={colors.onPrimary}
      >
        Login
      </Button>

   
      <Text style={[styles.socialText, { color: colors.onSurface }]}>
        Or continue with
      </Text>

      <View style={styles.socialRow}>
       
        <Button
          mode="outlined"
          onPress={() => console.log("Google Login")}
          style={styles.socialButton}
        >
          <View style={styles.socialContent}>
            <GoogleLogo width={22} height={22} style={{ marginRight: 10 }} />
            <Text style={styles.socialLabel}>Google</Text>
          </View>
        </Button>

     
        <Button
          mode="outlined"
          onPress={() => console.log("Facebook Login")}
          style={styles.socialButton}
        >
          <View style={styles.socialContent}>
            <FacebookLogo width={22} height={22} style={{ marginRight: 10 }} />
            <Text style={styles.socialLabel}>Facebook</Text>
          </View>
        </Button>
      </View>


      <Button
        mode="text"
        onPress={() => router.push("/signup")}
        textColor={colors.primary}
        style={{ marginTop: 10 }}
      >
        Don't have an account? Create one
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
  loginButton: { marginTop: 12, padding: 2 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  rememberRow: { flexDirection: "row", alignItems: "center" },
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
