import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryList: {
    padding: 10,
  },

  categoryButton: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  selectedCategory: {
    backgroundColor: 'orange',
  },

  categoryText: {
    color: '#000',
    fontWeight: '600',
  },

  selectedCategoryText: {
    color: '#fff',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 12,
    borderRadius: 10,
    padding: 10,
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

  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },

  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default styles;
