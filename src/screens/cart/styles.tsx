import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginVertical: 8,
  },

  bottomSummary: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F5F5F5',
  },

  totalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },

  qtyButton: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: '#000',
  },

  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 12,
    color: '#000',
  },

  removeButton: {
    marginLeft: 'auto',
  },

  removeText: {
    color: 'red',
    fontSize: 15,
    fontWeight: '600',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  contentConatinerStyle: {
    flexGrow: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  label: {
    fontSize: 16,
    color: '#555',
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default styles;
