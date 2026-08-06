import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 5,
  },

  idContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  id: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
    textTransform: 'capitalize',
  },

  body: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
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
