import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  content: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginRight: 10,
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    lineHeight: 20,
  },

  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#FF9800',
  },

  favouriteIcon: {
    padding: 4,
  },

  loading: {
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
    fontSize: 18,
    color: 'red',
    fontWeight: '600',
  },
});

export default styles;
