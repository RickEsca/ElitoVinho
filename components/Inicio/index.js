import  React from 'react';
import { View, Text, ImageBackground} from 'react-native';

import imgcapa from '../../assets/img_vinhos/capa.jpg'
import estilo from './estilo';

export default function TelaInicio () {
    return(
        <ImageBackground
            blurRadius={ 10 }
            style={ estilo.container }
            source= { imgcapa }
            >
        <View>
            <Text style={ estilo.titulo}> Adega Fofa </Text>
            <Text style={ estilo.subtitulo}> Aqui você encontra os vinhos que o eliton mais adora NHUMY NHUMY </Text>
        </View>
        </ImageBackground>
    )
}