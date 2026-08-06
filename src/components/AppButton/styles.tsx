import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6B00',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  pressed: {
    opacity: 0.8,
  },
});

export default styles;
