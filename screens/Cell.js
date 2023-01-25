
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from "react";
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'


export default React.memo(function Cell({value,index,clickEL,result}) {
    const [cellStyle, setCellStyle] = useState({})
    const styles = StyleSheet.create({
        cell: cellStyle
      });
    useEffect(() => {
        switch(index) {
            case 0:
                setCellStyle({
                width:100,
                height: 100,
                backgroundColor: '#000',
                alignItems:'center',
                justifyContent:'center',
                borderStyle:'solid',
                borderRightColor:'white',
                borderBottomColor:'white',
                borderWidth: 2,
            })
            break
            case 1:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderBottomColor:'white',
                    borderLeftColor:'white',
                    borderRightColor:'white',
                    borderWidth: 2,
                })
                break
            case 2:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderLeftColor:'white',
                    borderBottomColor:'white',
                    borderWidth: 2,
                })
                break
            case 3:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderTopColor:'white',
                    borderRightColor:'white',
                    borderBottomColor:'white',
                    borderLeftColor:'#000',
                    borderWidth: 2,
                })
                break
            case 4:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderColor:'white',
                    borderWidth: 2,
                })
                break
            case 5:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderColor:'white',
                    borderRightColor:'#000',
                    borderWidth: 2,
                })
                break
            case 6:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderColor:'white',
                    borderBottomColor:'#000',
                    borderLeftColor:'#000',
                    borderWidth: 2,
                })
                break
            case 7:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderColor:'white',
                    borderBottomColor:'#000',
                    borderWidth: 2,
                })
                break
                case 8:
                setCellStyle({
                    width:100,
                    height: 100,
                    backgroundColor: '#000',
                    alignItems:'center',
                    justifyContent:'center',
                    borderStyle:'solid',
                    borderColor:'white',
                    borderRightColor:'#000',
                    borderBottomColor:'#000',
                    borderWidth: 2,
                })
                break

       
          }
      },[index]);

  return (
    <TouchableOpacity style={styles.cell} onPress={() => {
        clickEL(index)
        console.log('clickEL(index)',index);
    }}>
    {value ?  <Image  style={result.length === 0 ? { width: 60, height: 60}:{width: 100, height: 100}}  source={value === 'x' ? cross :value === 'o' ? circle: null} />: null} 
       
    </TouchableOpacity>
  )

})


