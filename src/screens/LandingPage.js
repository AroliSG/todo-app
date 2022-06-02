
import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { LandingStyle as styles } from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import useCustomState from '../hooks/useCustomState';
 
let sampleTest = [
  {
    title: 'tesdfdfddftrrrrrrrrrr1',
    comment: 'test1 test1 test1'
  },
  {
    title: 'test2',
    comment: 'test2 test2 test2'
  },
  {
    title: 'test2',
    comment: 'test2 test2 test2'
  },
  {
    title: 'test2',
    comment: 'test2 test2 test2'
  }
];

const LandingPage = () => {
 const labelWidth = useRef ({ test: 0 }).current;
  let custom = useCustomState (sampleTest);
  
 
  return (
    <View style = {styles.container}>
      <View style = {{ height: '20%', backgroundColor: '#a599b5' }}>
        <Text>Task 0 out of 0</Text>
      </View>

      <View style = {styles.customParent}>
        <ScrollView contentContainerStyle = {styles.ScrollView}>

            {/* To Do */}
          <View style = {styles.sampleBoxParent}>
            <Text style = {styles.Label}>To Do</Text>
 
            <View style = {styles.sampleBox}>
              <View style = {{ borderWidth: 1, borderRadius: 5, margin: 2}}>
                <TextInput placeholder = 'write your task' />
              </View>
     
              <TouchableOpacity style = {styles.buttonParent} 
                onPress = {() => {
                  console.log (custom.updateState ('test1', 'comment', 'eres pro'))
                  console.log (custom.newState ('test3', 'comment', 'nueva data insertada'))
                  console.log (custom.deleteState ('test3'))
                }}
                >
                <Icon name  = "add" color="#454ade" size = {24} />
                <Text>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>

            {/* Doing */}
          <View style = {styles.sampleBoxParent}>
            <Text style = {styles.Label}>Doing</Text>
 
            <View style = {styles.sampleBox}>
              <View style = {{ borderWidth: 1, borderRadius: 5, margin: 2 }}>
                <TextInput placeholder = 'write your task' />
              </View>
         
              {custom.getStates ().map (item => {
                return (
                  <View style = {{margin: 2}}>
                    <View style = {[styles.ItemLabelParent, { width: 50+labelWidth.test }]}>
                      <Text onLayout={({ nativeEvent }) => {
                        const { layout } = nativeEvent;
                        //setTextWidth (layout.width)
                        console.log ('que')
                        labelWidth.test =layout.width;
                        console.log (labelWidth.test)
                      }} 
                      style = {styles.ItemLabel}>{item.title}</Text>
                    </View>

                    <View style = {styles.items}>
                      <Text style = {styles.ItemLabel}>{item.comment}</Text>
                    </View>
                  </View>
                )
              })}

              <TouchableOpacity style = {styles.buttonParent}>
                <Icon name  = "add" color="#454ade" size = {24} />
                <Text>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>

            {/* Doing */}
          <View style = {styles.sampleBoxParent}>
            <Text style = {styles.Label}>Done</Text>

            <View style = {styles.sampleBox}>
              <View style = {{ borderWidth: 1, borderRadius: 5, margin: 2}}>
                <TextInput placeholder = 'write your task' />
              </View>
     
            </View>
          </View>          
        </ScrollView>
      </View>
    </View>
  )
}

export default LandingPage;