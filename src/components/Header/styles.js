import { StyleSheet }  from 'react-native';


const styles = StyleSheet.create({
    header: {
       width:'100%',
       height: 90,
       backgroundColor: '#20295F',
       borderBottomWidth:5,
       borderBottomColor: '#EE6B26',
       alignItems: 'center',
       justifyContent: 'center'

    },
    logo:{
        width:120,
        height:50,
    },
    notificationImageBell:{
        width:30,
        height: 35
    },
    leftIcon:{
        position: 'absolute',
        left:20,
        bottom: 20

    },
    leftIconImage:{
        width:30,
        height: 30
    },
    notification:{
        position: 'absolute',
        right:20
       
    },
    circle: {
        width:18,
        backgroundColor:'#FFF',
        borderRadius:50,
        alignItems: 'center',
        position:'absolute',
        left:13,
        bottom:13
    },
    notificationText:{
      color:'#EE6B26',
      fontWeight: 'bold'

    }
})


export default styles;