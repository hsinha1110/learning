import { TextInputProps } from 'react-native';


export interface AppTextInputProps  extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  error?: string;
}