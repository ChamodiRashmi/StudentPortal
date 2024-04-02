import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Registration from './src/Registration';
import Login from './src/Login';

// Define custom theme
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7f0404', // Corrected color value
  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <View style={styles.container}>
      
        <Registration />
        <Login />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});