import { SafeAreaView } from 'react-native';
import ShoppingListHeader from './src/components/ShoppingListHeader';
import ShoppingList from './src/components/ShoppingList';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {

  const RouteApp = () => {
    return (
      <SafeAreaView>
        <ShoppingListHeader />
        <ShoppingList />
      </SafeAreaView>
    )
  }
  return (
    <Provider store={store}>
      <RouteApp />  
    </Provider>
  );
}
