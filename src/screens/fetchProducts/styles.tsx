import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },

  card: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },

  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  price: {
    fontSize: 18,
    color: '#FF9800',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    lineHeight: 20,
  },
  inputStyle: {
    width: '90%',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 14,
    marginHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProduct: { fontSize: 18, fontWeight: '600', marginBottom: 40 },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 18,
  },
});
export default styles;
