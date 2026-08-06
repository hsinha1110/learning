import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  contentContainer: {
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 16,
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  content: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },

  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default styles;
