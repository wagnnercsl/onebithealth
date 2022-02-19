import React, { useState } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration
} from 'react-native'
import ResultImc from '../ResultImc'
import styles from './styles'


export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [imc, setImc] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [textButton, setTextButton] = useState("Calcular IMC")
    const [errorMessage, setErrorMessage] = useState(null)

    function calculateImc() {
        let newImc = (weight/(height*height))
        setImc(newImc.toFixed(2))
    }

    function checkImc() {
        if(imc == null) {
            setErrorMessage("campo obrigatorio")
            Vibration.vibrate()
        }
    }

    function validateImc() {
        if(weight != null && height != null) {
            calculateImc()
            setErrorMessage(null)
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC e igual: ")
            setTextButton("Calcular novamente")
            return
        }
        checkImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
        
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    value={height ?? ""}
                    onChangeText={setHeight}
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 75.65"
                    keyboardType="numeric"
                    value={weight ?? ""}
                    onChangeText={setWeight}
                />
            </View>
            <TouchableOpacity style={styles.buttonCalculator} onPress={validateImc}> 
                <Text style={styles.textButtonCalculator}> {textButton} </Text> 
            </TouchableOpacity>
            <ResultImc result={imc} message={messageImc} />
        </View>
    );   
}