import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
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

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    marginRight: 10,
  },

  description: {
    color: '#666',
    marginTop: 8,
  },

  price: {
    marginTop: 10,
    color: '#ff9800',
    fontWeight: '700',
    fontSize: 18,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
