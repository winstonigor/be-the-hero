import React from 'react';
import {View,Text,Image, TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail(){

    const navigation = useNavigation();
    //const message = `Olá ${incident.name}Estou entrando em contato pq quero ajudar "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)}`;
   
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}Estou entrando em contato pq quero ajudar "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)}`;
    
    function voltar(){
        navigation.goBack();
    }
    // função para envio de Email
    function senEmail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients:[incident.email],
            body: message,


        })

    }

    //Função para envio de mensagem no zap
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                
                <TouchableOpacity onPress={voltar}>
                  <Feather name="arrow-left" size={28} color="#e82041"/>  
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty,{marginTop: 0}}>ONG:</Text>                    
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>                    
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)}</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text> 
            
            
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={senEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

                
                   
                </View>

            </View>
            

        
    );
}