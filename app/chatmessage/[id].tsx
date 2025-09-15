import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ChatMessageHeader from '@/components/ChatMessage';
import { MaterialIcons } from '@expo/vector-icons';

type Message = {
  id: string;
  sender: 'me' | 'other';
  text: string;
  time: string;
  sent?: boolean;
  delivered?: boolean;
};

export default function ChatScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const { id } = params;

  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'other', text: 'Welcome!', time: '10:00 AM' },
    { id: '2', sender: 'me', text: 'Hi there!', time: '10:01 AM', sent: true, delivered: true },
  ]);

  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList<Message>>(null);
  const onlineCount = 5;

  const handleDelete = () => setMessages([]);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const newMessage: Message = {
      id: Math.random().toString(),
      sender: 'me',
      text: inputText,
      time: `${hours}:${minutes} ${ampm}`,
      sent: true,
      delivered: false,
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    setTimeout(() => {
      setMessages(prev =>
        prev.map(m => (m.id === newMessage.id ? { ...m, delivered: true } : m))
      );
    }, 1000);
  };

  const renderItem: ListRenderItem<Message> = ({ item }) => {
    const isMe = item.sender === 'me';
    return (
      <View style={[styles.messageBubble, isMe ? styles.myMessage : styles.otherMessage]}>
        <Text style={[styles.messageText, isMe ? { color: '#fff' } : { color: '#000' }]}>
          {item.text}
        </Text>
        <View style={styles.timeContainer}>
          <Text style={[styles.timeText, isMe ? { color: '#eee' } : { color: '#555' }]}>{item.time}</Text>
          {isMe && item.sent && (
            <MaterialIcons
              name={item.delivered ? 'done-all' : 'done'}
              size={14}
              color={item.delivered ? '#4fc3f7' : '#fff'}
              style={{ marginLeft: 4 }}
            />
          )}
        </View>
      </View>
    );
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#f9f9f9' , marginBottom:50 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={{ flex: 1 }}>
          <ChatMessageHeader
            roomName={`Room ${id}`}
            onlineCount={onlineCount}
            onDelete={handleDelete}
          />

          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10, paddingVertical: 10 }}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
  },
  myMessage: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
