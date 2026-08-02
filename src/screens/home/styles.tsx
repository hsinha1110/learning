import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },

  quantityButton: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
    paddingHorizontal: 15,
  },
});

export default styles;
