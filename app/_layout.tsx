import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider,
  Theme as NavigationThemeType,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
} from "react-native-paper";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import CustomHeader from "@/components/CustomHeader";

export const unstable_settings = {};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const PaperTheme = isDark ? PaperDarkTheme : PaperLightTheme;

  const NavigationTheme: NavigationThemeType = {
    dark: isDark,
    colors: {
      primary: PaperTheme.colors.primary,
      background: PaperTheme.colors.background,
      card: PaperTheme.colors.surface,
      text: PaperTheme.colors.onSurface,
      border: PaperTheme.colors.outline,
      notification: PaperTheme.colors.secondary,
    },
    fonts: isDark ? NavigationDarkTheme.fonts : NavigationDefaultTheme.fonts,
  };

  return (
    <PaperProvider theme={PaperTheme}>
      <NavigationThemeProvider value={NavigationTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name="login"
            options={{ title: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            options={{ title: "Signup", headerShown: false }}
          />

          <Stack.Screen
            name="chatmessage/[id]"
            options={{ title: "", headerShown: false }}
          />

          <Stack.Screen
            name="profile"
            options={{
              header: () => <CustomHeader title="Profile" />,
            }}
          />

          <Stack.Screen
            name="create-room"
            options={{
              header: () => <CustomHeader title="Create Room" />,
            }}
          />
          <Stack.Screen
            name="forgot-password"
            options={{
              header: () => <CustomHeader title="Forgot Password" />,
            }}
          />

          <Stack.Screen
            name="all-room"
            options={{
              header: () => <CustomHeader title="All Room" />,
            }}
          />

          <Stack.Screen
            name="join-room"
            options={{
              header: () => <CustomHeader title="Join Room" />,
            }}
          />

          <Stack.Screen
            name="my-room"
            options={{
              header: () => <CustomHeader title="My Create Room" />,
            }}
          />

          <Stack.Screen
            name="otp"
            options={{
              header: () => <CustomHeader title="Verify Your OTP" />,
            }}
          />

          <Stack.Screen
            name="reset-password"
            options={{
              header: () => <CustomHeader title="Reset Password" />,
            }}
          />
        </Stack>

        <StatusBar style={isDark ? "light" : "dark"} />
      </NavigationThemeProvider>
    </PaperProvider>
  );
}
