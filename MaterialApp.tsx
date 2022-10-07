import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';

export default function MaterialApp() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
