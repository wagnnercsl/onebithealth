import React, { useState } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable
} from 'react-native'
import ListImc from '../ListImc';
import ResultImc from '../ResultImc'
import styles from './styles'


export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [listImc, setListImc] = useState([]);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [textButton, setTextButton] = useState("Calcular IMC");
    const [errorMessage, setErrorMessage] = useState(null);

    function hideKeyboard() {
        Keyboard.dismiss();
    }

    function calculateImc() {
        const weightFormatted = weight.replace(',', '.');
        const heightFormatted = height.replace(',', '.');
        let formattedImc = (weightFormatted/(heightFormatted*heightFormatted));

        setListImc([...listImc, {id: new Date().getTime(), imc: formattedImc.toFixed(2)}]);
        setImc(formattedImc.toFixed(2));
    }

    function checkImc() {
        if(imc == null) {
            setErrorMessage("campo obrigatorio");
            Vibration.vibrate();
        }
    }

    function validateImc() {
        if(weight != null && height != null) {
            calculateImc();
            setErrorMessage(null);
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC e igual: ");
            setTextButton("Calcular novamente");
        } else {
            checkImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e a altura");
        }
    }

    return (
        <View style={styles.formContainer}>
            {imc === null ? (
            <Pressable onPress={hideKeyboard} style={styles.form}>
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
            <TouchableOpacity style={styles.buttonCalculator} onPress={validateImc}> 
                <Text style={styles.textButtonCalculator}> {textButton} </Text> 
            </TouchableOpacity>
            </Pressable>
        ) : (
            <>
            <ResultImc result={imc} message={messageImc} />
            <TouchableOpacity style={styles.buttonCalculator} onPress={validateImc}> 
                <Text style={styles.textButtonCalculator}> {textButton} </Text> 
            </TouchableOpacity>
            <ListImc items={listImc} />
            </>
        )}
        </View>
    );   
}