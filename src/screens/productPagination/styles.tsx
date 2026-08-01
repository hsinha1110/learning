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
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
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

  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    overflow: 'hidden',
  },

  tab: {
    flex: 1,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebedf0',
  },

  activeTab: {
    backgroundColor: '#FF9800',
    color: 'green',
  },

  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },

  activeTabText: {
    color: '#fff',
  },
});
export default styles;
