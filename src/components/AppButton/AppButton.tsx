import React, { FC, ReactNode } from 'react';
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
  children?: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};

const AppButton: FC<Props> = ({
  title,
  children,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default AppButton;
