
import { AuthContextProvider } from './app/context/AuthContext';
import { SafeAreaView } from 'react-native';
import Navigation from './app/Navigation/Navigation';
import { StyleSheet } from 'react-native';


export default function App() {

    return ( 
      <SafeAreaView style={styles.home}>
     <AuthContextProvider>
      <Navigation/>
      </AuthContextProvider>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
home:{
  flex: 1,
  backgroundColor: "#ffe4b5",
}

})