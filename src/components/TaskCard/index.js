import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native'
import styles from './styles';

// IMAGES

import iconDefault from '../../assets/default.png';


export default function TaskCard(){
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardLeft}>
                    <Image source={iconDefault} style={styles.typeActive}/>
                    <Text style={styles.cardTitle}>Fazer Relatório</Text>
            </View>
            <View style={styles.cardRight}>
            <Text style={styles.cardDate}>25/02/2021</Text>
            <Text style={styles.cardTime}>15:30</Text>
            </View>
        </TouchableOpacity>
    )
}