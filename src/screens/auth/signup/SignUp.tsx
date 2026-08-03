import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../../../components/Input/AppTextInput';
import Button from '../../../components/Button/Button';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { signUpThunk } from '../../../redux/thunk/signUpThunk';
import { SignupNavigationProp } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../constant/Routes';

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<SignupNavigationProp>();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const clearError = (field: string) => {
    setErrors({
      ...errors,
      [field]: '',
    });
  };
  const signUp = async () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!userName.trim()) {
      newErrors.userName = 'Username is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.userName ||
      newErrors.email ||
      newErrors.password ||
      newErrors.confirmPassword
    ) {
      return;
    }

    const payload = {
      firstName,
      lastName,
      username: userName,
      email,
      password,
    };

    try {
      const response = await dispatch(signUpThunk(payload)).unwrap();

      console.log('Signup Success:', response);
      navigation.replace(Routes.LOGIN);
    } catch (error) {
      console.log('Signup Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>Create your account to continue</Text>

        <AppTextInput
          label="First Name"
          placeholder="Enter first name"
          value={firstName}
          onChangeText={text => {
            setFirstName(text);
            clearError('firstName');
          }}
          error={errors.firstName}
          autoCapitalize="none"
        />

        <AppTextInput
          label="Last Name"
          placeholder="Enter last name"
          value={lastName}
          onChangeText={text => {
            setLastName(text);
            clearError('lastName');
          }}
          error={errors.lastName}
          autoCapitalize="none"
        />

        <AppTextInput
          label="Username"
          placeholder="Enter username"
          value={userName}
          onChangeText={text => {
            setUserName(text);
            clearError('userName');
          }}
          error={errors.userName}
          autoCapitalize="none"
        />

        <AppTextInput
          label="Email"
          placeholder="Enter email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => {
            setEmail(text);
            clearError('email');
          }}
          error={errors.email}
        />

        <AppTextInput
          label="Password"
          placeholder="Enter password"
          value={password}
          secureTextEntry
          onChangeText={text => {
            setPassword(text);
            clearError('password');
          }}
          error={errors.password}
          autoCapitalize="none"
        />

        <AppTextInput
          label="Confirm Password"
          placeholder="Confirm password"
          value={confirmPassword}
          secureTextEntry
          onChangeText={text => {
            setConfirmPassword(text);
            clearError('confirmPassword');
          }}
          error={errors.confirmPassword}
          autoCapitalize="none"
        />

        <Button title="Create Account" onPress={signUp} />

        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate(Routes.LOGIN)}
        >
          <Text style={styles.bottomText}>
            Already have an account?
            <Text style={styles.link}> Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
