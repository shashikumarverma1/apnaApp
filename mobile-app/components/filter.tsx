import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const FilterModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animation] = useState(new Animated.Value(windowHeight));

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const animateModal = () => {
    Animated.timing(animation, {
      toValue: isVisible ? windowHeight : windowHeight / 2,
      duration: 500, // Adjust the duration for slower animation
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animateModal();
  }, [isVisible]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent
        visible={isVisible}
        onRequestClose={toggleModal}
      >
     <Text>wowo</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// export default BottomModal;
