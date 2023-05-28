import { SafeAreaView, ScrollView, View } from 'react-native';
import Dashboard from './components/Dashboard';
import colors from './components/colors';

export const App = () => {
  return (
    <SafeAreaView
      style={{ height: '100%', backgroundColor: colors.ghost_white }}>
      <ScrollView>
        <View style={{ height: '100%' }}>
          <Dashboard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
