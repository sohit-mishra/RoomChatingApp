# Room Chat App (Frontend Only)

This is the **frontend of the Room Chat App** built using **React Native and Expo**.  
This version **does not connect to a backend**, so messages are only stored locally in the app state.

---

## Features

- Real-time chat UI simulation (messages stored locally)
- Message input with send button
- Message bubbles for **me** and **other**
- Timestamps for each message
- Delivered / sent indicators for sent messages
- Scrollable chat with auto-scroll to latest message
- Keyboard-aware input field
- Chat header with room name, online users, and delete all messages option

---

## Tech Stack

- **React Native**  
- **Expo**  
- **React Hooks** (`useState`, `useEffect`, `useRef`)  
- **React Native Paper** (optional styling components)  
- **React Navigation** (for screen routing)  
- **MaterialIcons** (for icons)

---

## Screens

1. **Chat Screen**  
   - Main chat interface with messages and input field
   - Local message simulation with sent/delivered status
2. **Header Component**  
   - Room name display
   - Online user count
   - Delete messages button

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm or yarn
- Expo CLI (`npm install -g expo-cli`) or use `npx expo`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohit-mishra/RoomChatingApp.git
cd RoomChatingApp
```

2. Install dependencies:
```
npm install
# or
yarn install
```


3. Start the Expo development server:
```
npx expo start
```
4. Run the app on an emulator or physical device:
- Use Expo Go app for iOS/Android
- Scan the QR code from Expo CLI

## Screenshots

### Signup Screen
<img src="assets/screenshot/signup.jpg" alt="Signup Screen" width="300"/>

### Login Screen
<img src="assets/screenshot/login.jpg" alt="Login Screen" width="300"/>

### Forgot Password Screen
<img src="assets/screenshot/forgotpassword.jpg" alt="Forgot Password Screen" width="300"/>

### OTP Verification Screen
<img src="assets/screenshot/otp.jpg" alt="OTP Verification Screen" width="300"/>

### Reset Password Screen
<img src="assets/screenshot/resetpassword.jpg" alt="Reset Password Screen" width="300"/>

### Home Screen
<img src="assets/screenshot/home.jpg" alt="Home Screen" width="300"/>

### Chat Room Screen
<img src="assets/screenshot/chatingroom.jpg" alt="Chat Room Screen" width="300"/>

### Profile Screen
<img src="assets/screenshot/profile.jpg" alt="Profile Screen" width="300"/>

### Join Room Screen
<img src="assets/screenshot/join room.jpg" alt="Join Room Screen" width="300"/>

### My Created Rooms Screen
<img src="assets/screenshot/mycreateroom.jpg" alt="My Created Rooms Screen" width="300"/>

### All Rooms Screen
<img src="assets/screenshot/allroom.jpg" alt="All Rooms Screen" width="300"/>



### Author

#### Sohit Mishra
- GitHub: https://github.com/sohit-mishra


---

If you want, I can also **add instructions for building the APK and submitting it**, so the README fully covers your project submission.  

Do you want me to do that?
