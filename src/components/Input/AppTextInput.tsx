import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { AppTextInputProps } from '../types';

const AppTextInput: FC<AppTextInputProps> = ({
  label,
  error,
  style,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, error ? styles.errorInput : null, style]}
        placeholderTextColor="#999"
        onChangeText={onChangeText}
        {...props}
      />

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default AppTextInput;
