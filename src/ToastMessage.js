// src/ToastMessage.js
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const themes = {
  default: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
  },
  primary: {
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    color: '#fff',
  },
  error: {
    backgroundColor: 'rgba(220, 53, 69, 0.8)',
    color: '#fff',
  },
  warning: {
    backgroundColor: 'rgba(255, 193, 7, 0.8)',
    color: '#fff',
  },
  success: {
    backgroundColor: 'rgba(40, 167, 69, 0.8)',
    color: '#fff',
  },
};

const getVerticalPositionStyle = (position) => {
  switch (position) {
    case 'top':
      return { justifyContent: 'flex-start', marginTop: 50 };
    case 'bottom':
      return { justifyContent: 'flex-end', marginBottom: 50 };
    case 'middle':
    default:
      return { justifyContent: 'center' };
  }
};

const ToastMessage = forwardRef((props, ref) => {
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'default', position: 'middle', duration: 2000 });

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, isVisible: false }));
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  useImperativeHandle(ref, () => ({
    show: ({ type = 'default', text1, position = 'middle', duration = 2000 }) => {
      setToast({ isVisible: true, message: text1, type, position, duration });
    },
  }));

  const theme = themes[toast.type] || themes.default;

  return (
    <Modal
      isVisible={toast}
      backdropOpacity={0.3}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={[styles.container, getVerticalPositionStyle(toast.position), { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.message, { color: theme.color }]}>{toast.message}</Text>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
  },
});

export default ToastMessage;
