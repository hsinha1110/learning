import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  star: {
    fontSize: 18,
    marginRight: 4,
  },
  content: {
    padding: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 14,
  },

  label: {
    color: '#666',
    fontWeight: '600',
  },

  value: {
    color: '#111',
    fontWeight: '700',
  },

  footerLoader: {
    marginVertical: 20,
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
    fontSize: 18,
    color: 'red',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  categoryCard: {
    marginRight: 12,
    alignItems: 'center',
  },

  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  categoryName: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  categoryList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    position: 'relative',
  },

  favouriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favouriteHeaderButton: {
    position: 'absolute',
    top: 14,
    right: 18,
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
  },

});
export default styles;
