import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111',
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 8,
    marginBottom: 30,
  },

  button: {
    marginTop: 15,
  },

  footer: {
    alignItems: 'center',
    marginTop: 25,
  },

  bottomText: {
    fontSize: 15,
    color: '#666',
  },

  link: {
    color: '#007AFF',
    fontWeight: '700',
  },
});
