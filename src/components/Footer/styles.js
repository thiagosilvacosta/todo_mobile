import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:70,
        backgroundColor:'#20295F',
        position: 'absolute',
        bottom:0,
        alignItems: 'center',
        borderTopWidth: 5,
        borderTopColor: '#EE6B26'
        
        
    },
    button:{
        position: 'relative',
        bottom:50
    },
    image:{
        width: 80,
        height: 80       
        
    },
    text:{
        position:'absolute',
        bottom:0,
        color:'#FFF'
    }


})

export default styles;