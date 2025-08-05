import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup"

const passwordSchema= Yup.object().shape({
    passwordLength:Yup.number().required("Length is Requires")
    .min(8,"Should be min of 8 characters")
    .max(16,"Should be max of 16 characters")
})
const FormValidation = () => {
    const [password,setPassword]=useState('')
    const [isPasswordGenerated,setIsPasswordGenerated]=useState(false)
    const [lowerCase,setLowerCase]=useState(true)
    const [upperCase,setUpperCase]=useState(false)
    const [number,setNumber]=useState(false)
    const [symbols,setSymbols]=useState(false)

    const genratedPasswordString=(passwordLength:number)=>{
    let charactersList='';
    const upperCaseCharater="WERTYUIOPSDFGHJKLAZXCVBNM";
    const lowerCaseCharater="qwertyuiopasdfghjklzxcvbnm";
    const digitCharters="0123456789";
    const SpecialCharaters="!@#$%^&*()_+"
        if(upperCase){
            charactersList+=upperCaseCharater
        }
        if(lowerCase){
            charactersList+=lowerCaseCharater
        }
        if(number){
            charactersList+=digitCharters
        }
        if(symbols){
            charactersList+=SpecialCharaters
        }
        const passwordResult=createPassword(charactersList,passwordLength)

        setPassword(passwordResult)
        setIsPasswordGenerated(true)
    }
    const createPassword=(charater:string,passwordLength:number)=>{
        let result='';
        for (let index = 0; index < passwordLength; index++) {
            const element = Math.round(Math.random()*charater.length);
            result+=charater.charAt(element)
        }
        return result
    }
    const resetPasswordState=()=>{
        setPassword(''),
        setIsPasswordGenerated(false);
        setLowerCase(true);
        setNumber(false);
        setUpperCase(false);
        setSymbols(false)
    }
  return (
    <View>
      <Text>FormValidation</Text>
    </View>
  )
}

export default FormValidation

const styles = StyleSheet.create({})