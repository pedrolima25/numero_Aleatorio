import React,{useState} from 'react';
import {Text, SafeAreaView,TouchableOpacity,StyleSheet, view} from 'react-native';


const App = () => {

    const [numero,setNumero] = useState(10)

    function handlenumero(){
        const novo_numero= Math.floor(Math.random()*100);
        setNumero(numero +novo_numero)   
    }
    return (
 <SafeAreaView style={style.container}>
        <Text style={style.numero}> {numero}</Text>
        <TouchableOpacity onPress={handlenumero} style={style.botao}>
            <Text >Gerar Número</Text>
        </TouchableOpacity>
</SafeAreaView>
    );
};

const style = StyleSheet.create({
container:{
        backgroundColor:'#61dafb',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
numero:{
        fontSize:38,
        color:'#111',
        fontWeight:'bold',
    },
text:{
    fontSize:20,
    color:'#ffffff',
},
botao:{
    backgroundColor: '#ffffff',
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    justifyContent:'center',
    alignItems: 'center',
    marginTop:10,

},



});
    
export default App;