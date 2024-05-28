// index.js
import ToastMessage from './src/ToastMessage';
import React from 'react';

const toastRef = React.createRef();

export const Toast = {
  show: (options) => {
    if (toastRef.current) {
      toastRef.current.show(options);
    }
  },
};

export const ToastContainer = () => {
  return <ToastMessage ref={toastRef} />;
};
