import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppTextInput from '../../../components/Input/AppTextInput';
import Button from '../../../components/Button/Button';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/types';
import { loginThunk } from '../../../redux/thunk/loginThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import Routes from '../../../constant/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  Routes.LOGIN
>;
const LoginScreen = () => {
  const [userName, setUserName] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const navigation = useNavigation<LoginNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const clearError = (field: string) => {
    setErrors({
      ...errors,
      [field]: '',
    });
  };
  const onLogin = async () => {
    let newError = {
      username: '',
      password: '',
    };

    if (!userName.trim()) {
      newError.username = 'UserName is required';
    }

    if (!password.trim()) {
      newError.password = 'Password is required';
    }
    setErrors(newError);

    if (newError.username || newError.password) return;

    const payload = {
      username: userName,
      password,
    };

    try {
      const response = await dispatch(loginThunk(payload)).unwrap();
      await AsyncStorage.setItem('accessToken', response.accessToken);

      await AsyncStorage.setItem('refreshToken', response.refreshToken);

      console.log('Token Saved');
    } catch (error) {
      console.log('Login Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subTitle}>Login to continue</Text>

      <AppTextInput
        label="Username"
        placeholder="Enter username"
        value={userName}
        autoCapitalize="none"
        error={errors.username}
        onChangeText={text => {
          setUserName(text);
          clearError('username');
        }}
      />

      <AppTextInput
        label="Password"
        placeholder="Enter Password"
        value={password}
        autoCapitalize="none"
        onChangeText={text => {
          setPassword(text);
          clearError('password');
        }}
        secureTextEntry
        error={errors.password}
      />

      <Button title="Login" onPress={onLogin} />

      <TouchableOpacity onPress={() => navigation.navigate(Routes.SIGN_UP)}>
        <Text style={styles.bottomText}>
          Don't have an account?
          <Text style={styles.link}> Signup</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
