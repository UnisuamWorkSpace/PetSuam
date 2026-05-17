import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Input({ placeholder, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput  
        style={[
          styles.inputBox, 
          isFocused && styles.inputFocused
        ]} 
        placeholder={placeholder} 
        placeholderTextColor="#A0AEC0" // Softer gray for placeholder
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          // Safely trigger original onBlur if passed in props
          if (props.onBlur) props.onBlur(e);
        }}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14, // Slightly tighter spacing for a cleaner form layout
    width: '100%',
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    borderColor: "#E2E8F0", // Soft, modern border color
    borderWidth: 1.5,
    paddingVertical: 12,    // Better vertical padding for touch accessibility
    paddingHorizontal: 16,  // Comfortable text indentation
    borderRadius: 12,       // Smoother rounded corners
    width: '100%',          // Flexible width (controlled by the parent card)
    color: '#2D3748',       // Dark slate gray instead of harsh pure black
    fontSize: 16,
    // Subtle shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    // Subtle shadow for Android
    elevation: 1,
  },
  inputFocused: {
    borderColor: '#4A90E2', // Glow color when clicked (matches the active buttons)
    backgroundColor: '#F8FAFC', // Tiny shift in background to show interaction
  }
});