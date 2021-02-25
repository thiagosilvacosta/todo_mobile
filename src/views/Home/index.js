import React, {useState} from 'react';

import { Text, SafeAreaView,View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

// COMPONENTES
import Header from '../../components/Header';
import TaskCard from '../../components/TaskCard';
import Footer from '../../components/Footer';


export default function Home(){
    const [filteractived, setFilterActived] = useState('today')

    return (
      
        <View style={styles.container}>
           <Header showNotification={true} Shoback={false}/>
           <View style={styles.filter}>
                <TouchableOpacity>
                    <Text style={filteractived == 'all' ? styles.filterTextActived : styles.filterTextInative } onPress={()=>setFilterActived('all')}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={filteractived == 'today' ? styles.filterTextActived : styles.filterTextInative } onPress={()=>setFilterActived('today')}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={filteractived == 'week' ? styles.filterTextActived : styles.filterTextInative } onPress={()=>setFilterActived('week')}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={filteractived == 'month' ? styles.filterTextActived : styles.filterTextInative } onPress={()=>setFilterActived('month')}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={filteractived == 'year' ? styles.filterTextActived : styles.filterTextInative } onPress={()=>setFilterActived('year')}>Ano</Text>
                </TouchableOpacity>
           </View>
           
            <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
               <TaskCard/>
               <TaskCard/>
               <TaskCard/>
               <TaskCard/>
               <TaskCard/>
               <TaskCard/>
               <TaskCard/>
            </ScrollView>
               
           
           <Footer icon={'add'}/>
        </View>
    )
}