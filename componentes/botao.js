import React from 'react';
import {StyleSheet,TouchableHighlight,Text,Dimensions} from 'react-native';



export default props =>{
    const estilosBotoes=[estilos.btn]
    if(props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    }
    if (props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if (props.operacao){
        estilosBotoes.push(estilos.btnOper)
    }
    if (props.ac){
        estilosBotoes.push(estilos.btnAC)
    }
    if (props.bs){
        estilosBotoes.push(estilos.btnBS)
    } 
    return(
        <TouchableHighlight
          onPress={props.aoClicar}
        >
    <Text style ={estilosBotoes}>{props.label} </Text>
            

    </TouchableHighlight>

 )
}

const estilos = StyleSheet.create({
 btn:{
     fontSize:30,
     height:Dimensions.get('window').width/4,
     width:Dimensions.get('window').width/3,
     padding:20,
     backgroundColor:'#06111C',
     color:'#FFEB4D',
     borderWidth:1,
     borderColor:'#00706C',
     textAlign:'center'
 },
 btnOper:{
    color:'#BEC7C7',
 },
 btnIgual:{
     color:'#f00',
},
btnAC:{
    color:'#F58C47',
},
btnBS:{
    color:'#590212',
},
btnDuplo:{
    width:(Dimensions.get('window').width/4)*2,

}
})