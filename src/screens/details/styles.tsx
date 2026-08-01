import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },

  price: {
    fontSize: 20,
    color: 'orange',
    marginTop: 10,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 24,
    color: '#555',
  },
});

export default styles;
