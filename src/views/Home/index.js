import React from 'react';

import { Text, SafeAreaView,View } from 'react-native';
import styles from './styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Home(){

    return (
      
        <View style={styles.container}>
           <Header showNotification={true}/>
           <Footer icon={'add'}/>
        </View>
    )
}