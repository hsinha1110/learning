import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
