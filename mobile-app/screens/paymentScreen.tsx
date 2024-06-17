import React from 'react';
import { View, Button, Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const Pay = () => {
  const handlePayment = () => {
    const options = {
      description: 'Credits towards consultation',
      image: 'https://your-logo-url.com/logo.png',
      currency: 'INR',
      key: 'rzp_test_XZqevi0iNDKcH1', // Your Razorpay Key ID
      amount: '5000', // 5000 paise = INR 50
      name: 'Your App Name',
      prefill: {
        email: 'example@example.com',
        contact: '9191919191',
        name: 'Razorpay User'
      },
      theme: {color: '#F37254'}
    };

    RazorpayCheckout.open(options).then((data) => {
      // handle success
      Alert.alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      Alert.alert(`Error: ${error.code} | ${error.description}`);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pay with Razorpay" onPress={handlePayment} />
    </View>
  );
};

export default Pay;
