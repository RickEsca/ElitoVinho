import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head:{
        paddingVertical: 19,
        paddingStart:8,
        borderBottomColor: 'Yellow',
        borderBottomWidth: 1,
        backgroundColor: '#000',
        flexDirection: 'row'
    },
    head_title:{
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        marginHorizontal: 8
    },
    body:{
        flex: 1,
        backgroundColor: '#800080',
        alignItems: 'center',
    },
    slides:{
       flexDirection: 'row',
       width: 400,
       height: 350,
    },
    foto:{
        width: 350,
        height: 300,
        resizeMode: 'contain',
        color: '#fff'
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    descricao:{
        fontSize: 20,
        color: '#fff'
    }
});

export default styles;