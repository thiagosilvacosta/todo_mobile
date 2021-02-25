import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'flex-start',
       
    },
    filter:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-around',
        height:70,
        alignItems: 'center'
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26'
    },
    filterTextInative:{
        color: '#20295F',
        fontWeight: 'bold',
        fontSize:18,
        opacity: 0.5
    },
    content:{
        width: '100%',
       marginTop:30,
       
    }
    

})


export default styles;