import { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { Button, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import VerifyOtp from "../assets/verifyotp.svg";

export default function OTP() {
  const { colors } = useTheme();
  const router = useRouter();

  
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [timer, setTimer] = useState(30);

  
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  
  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const otpCode = otp.join("");
  const isOtpComplete = otpCode.length === 6;

  return (
    <View style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <VerifyOtp width="90%" height={180} style={styles.icon} />

      <Text style={[styles.subtitle, { color: colors.onSurface }]}>
        We’ve sent a 6-digit verification code to your email.
      </Text>

     
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => { inputs.current[index] = ref; }}
            style={[styles.otpBox, { borderColor: colors.primary }]}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      
      <Button
        mode="contained"
        onPress={() => {
          console.log("Verify OTP:", otpCode);
          router.push("/reset-password");
        }}
        style={styles.verifyButton}
        buttonColor={colors.primary}
        textColor={colors.onPrimary}
        disabled={!isOtpComplete}
      >
        Verify OTP
      </Button>

     
      <Button
        mode="text"
        onPress={() => {
          console.log("Resend OTP");
          setTimer(30);
        }}
        textColor={colors.primary}
        style={{ marginTop: 12 }}
        disabled={timer > 0}
      >
        {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
      </Button>

      <Button
        mode="text"
        onPress={() => router.push("/login")}
        textColor={colors.primary}
        style={{ marginTop: 5 }}
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
  icon: { marginBottom: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },
  otpBox: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  verifyButton: { marginTop: 12, padding: 2, width: "80%", alignSelf: "center" },
});
