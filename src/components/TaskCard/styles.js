import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'90%',
        height:80,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation:5,
        borderRadius: 8,
        padding:10,
        marginVertical: 10       
    },
    cardLeft:{
        flexDirection:'row',
        alignItems: 'center',

    },
    typeActive:{
        width: 50,
        height:50
    },
    cardTitle:{
        marginLeft: 10,
        fontSize:16,
        fontWeight: 'bold'
    },

    cardRight:{
        alignItems:'flex-end',
        justifyContent: 'space-between'
    },
    cardDate:{
        color:'#EE6B29',
        fontWeight: 'bold',
        fontSize:16
    },
    cardTime:{
        color:'#707070',
        fontWeight: 'bold',
        fontSize:14
    },
    
})

export default styles;