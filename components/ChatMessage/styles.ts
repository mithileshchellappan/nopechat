import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
const styles = StyleSheet.create({
    container:{
        padding:7,
    },
    messageBox:{
        borderRadius:6.5,
        padding:10
    },
    name:{
        color:Colors.light.tint,
        marginBottom:4,
        fontWeight:'bold',
    },
    message:{
        
    },
    time:{
        alignSelf:'flex-end',
        fontSize:11,
        color:'grey'
    }
})

export default styles