import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup"
import { Formik } from 'formik'
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
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
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generater</Text>
             <Formik
             
       initialValues={{passwordLength:"" }}
       validationSchema={passwordSchema}
       onSubmit={values=>{
        console.log(values);
        
        genratedPasswordString(+values.passwordLength)
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
         
         /* and other goodies */
       }) => (
        
         <>
         <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
                <Text style={styles.heading}>Password Length</Text>
                {touched.passwordLength && errors.passwordLength&&(
                    <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
                
            </View>
            <TextInput
                style={styles.inputStyle}
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                placeholder='length of 8'
                keyboardType='numeric'
                />
         </View>
         <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include lowerCase</Text>
            <BouncyCheckbox 
            useBuiltInState={false}
            // disableBuiltInState
            isChecked={lowerCase}
            onPress={()=>{setLowerCase(!lowerCase)}}
            fillColor='#29ABB7'
            />
            </View>
         <View style={styles.inputWrapper}>
             <Text style={styles.heading}>Include UpperCase Latter</Text>
            <BouncyCheckbox 
            useBuiltInState={false}
            // disableBuiltInState
            isChecked={upperCase}
            onPress={()=>{setUpperCase(!upperCase)}}
            fillColor='#29ABB7'
            />
         </View>
         <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Number</Text>
            <BouncyCheckbox 
            useBuiltInState={false}
            // disableBuiltInState
            isChecked={number}
            onPress={()=>{setNumber(!number)}}
            fillColor='#29ABB7'
            />
         </View>
         <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Symbols</Text>
            <BouncyCheckbox 
            useBuiltInState={false}
            // disableBuiltInState
            isChecked={symbols}
            onPress={()=>{setSymbols(!symbols)}}
            fillColor='#29ABB7'
            />
         </View>

         <View style={styles.formActions}>
            <TouchableOpacity
            disabled={!isValid}
            style={styles.primaryBtn}
            onPress={handleSubmit}
            ><Text style={styles.primaryBtnTxt}>Generate Password</Text></TouchableOpacity>
            <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={()=>{handleReset()}}
            ><Text style={styles.secondaryBtnTxt}>Reset Password</Text></TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
        </View>
        {isPasswordGenerated?(
            <View style={[styles.card,styles.cardElevated]}>
                <Text style={styles.subTitle}>Result</Text>
                <Text style={styles.description}>Long press to copy</Text>
                <Text  selectable={true}style={styles.generatedPassword}>{password}</Text>
            </View>
        ):null}
      </SafeAreaView>
    </ScrollView>
  )
}

export default FormValidation

const styles = StyleSheet.create({
     appContainer: {
    flex: 1,
    backgroundColor:"#ffffff",
    margin:10,
    borderRadius:10
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})