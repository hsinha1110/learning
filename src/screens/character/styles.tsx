import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Common
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
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

  // =======================
  // Character List Screen
  // =======================

  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 5,
  },

  imageSmall: {
    width: 110,
    height: 110,
    borderRadius: 16,
    resizeMode: 'cover',
  },

  content: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },

  info: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },

  // =======================
  // Character Details Screen
  // =======================

  detailsContent: {
    padding: 20,
    paddingBottom: 40,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 110,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#fff',

    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 8,
  },

  headerName: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginTop: 18,
  },

  badge: {
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#2ECC71',
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 6,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },

  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
  },

  label: {
    fontSize: 16,
    color: '#777',
    fontWeight: '500',
  },

  value: {
    flex: 1,
    marginLeft: 20,
    textAlign: 'right',
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },
});

export default styles;
