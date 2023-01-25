import { StyleSheet, Text, View, TouchableOpacity , Button, Image , Dimensions } from 'react-native';
import React, { useState,useEffect } from "react";
import Cells from './Cells';
import reset from '../assets/reset.png'
import { Square } from 'native-base';
import Cell from './Cell';

export default function GameWindow({route}) {
  const { player } = route.params;
  const [circleOrCross, setCircleOrCross] = useState(true)
  const [gridArr, setGridArr] = useState(['','','','','','','','',''])
  const [showCircleOrCross, setShowCircleOrCross] = useState(false)
  const [result, setResult ] = useState([])
  const getRandomNumber = () => {
    const randomNumber = Date.now()
    const quontityNumber = randomNumber.toString().length
    const lastNumber = randomNumber.toString()
   return lastNumber[quontityNumber - 1]
  }
  const victories = (arrForExamination) => {
        const options = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
        for(let i = 0; i < options.length; i++ ) {
          const [a,b,c] = options[i]
            if(arrForExamination[a] && arrForExamination[a] === arrForExamination[b] && arrForExamination[a] === arrForExamination[c]) {
              return [a,b,c]
            }
        }
        return null
  }

  const autoClick = () => {
    if(victories(gridArr)) return
    const examination =  gridArr.filter((el)=> el === '')
      if(examination.length === 0)  return 
    setShowCircleOrCross(true)
    const randomMove = getRandomNumber()
      if(randomMove === '9') {return autoClick() }
    const checkingElementExistsAutoClick = [...gridArr]
      if (checkingElementExistsAutoClick[randomMove]) {
        return autoClick()
      }
    checkingElementExistsAutoClick[randomMove] = circleOrCross ? 'x' : 'o'
    setGridArr(checkingElementExistsAutoClick)
    setCircleOrCross(!circleOrCross)
  }

useEffect(()=> {
  if(player === 1 && !circleOrCross) {
    autoClick()
  }
},[circleOrCross,player])

  const clickCount = (index) => {
    setShowCircleOrCross(true)
    const checkingElementExists = [...gridArr]
      if(victories(gridArr) || checkingElementExists[index]) return 
    checkingElementExists[index] = circleOrCross ? 'x' : 'o'
    setGridArr(checkingElementExists)
    setCircleOrCross(!circleOrCross)
    }

    useEffect(()=> {
      const winner =  victories(gridArr)
      if(winner && winner.length === 3) setResult(winner)
     
    },[gridArr])
    return (
      <View style={styles.container}>

          {/* <Button title='1'
          onPress={() => { 
            autoClick()
          }}>

          </Button> */}
          <TouchableOpacity  style={{
                position: 'absolute',
                top: '5%', 
                right: '10%',
                }} 
                onPress={() => { 
                  setGridArr(['','','','','','','','',''])
                  setCircleOrCross(true)
                  setShowCircleOrCross(false)
                  setResult([])
            }}>
                  <Image  
                    source={reset}>
                  </Image>
          </TouchableOpacity>
        <View style={styles.gridBlock}>
        <Cell 
            result={result.filter(el => el  === 0)}
            key={0}
            value={gridArr[0]} 
            index={0} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 1)}
            key={1}
            value={gridArr[1]}  
            index={1} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 2)}
            key={2}
            value={gridArr[2]}  
            index={2} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 3)}
            key={3}
            value={gridArr[3]}  
            index={3} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 4)}
            key={4}
            value={gridArr[4]}  
            index={4} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 5)}
            key={5}
            value={gridArr[5]}  
            index={5} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 6)}
            key={6}
            value={gridArr[6]}  
            index={6} 
            clickEL={clickCount}
            />
             <Cell 
            result={result.filter(el => el  === 7)}
            key={7}
            value={gridArr[7]}  
            index={7} 
            clickEL={clickCount}c
            />
             <Cell 
            result={result.filter(el => el  === 8)}
            key={8}
            value={gridArr[8]}  
            index={8} 
            clickEL={clickCount}
            />
              </View>
      </View>
    );
}

const styles = StyleSheet.create({
  gridBlock: {
    width: 320,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    backgroundColor:'#000',
    width:80,
    heigth: 20,
    position: 'absolute' ,
    top: '5%', 
    right: '5%', 
    width:80, 
    heigth: 20, 
    color:'#000',
    flexDirection:'row',
    textTransform:'uppercase'
  },
  container: {
    paddingHorizontal:15,
    paddingVertical:15,
    flex: 1,
    backgroundColor: '#000',
    alignItems:"center",
    justifyContent:'center'
  },
  title: {
    top:0,
    textTransform:"uppercase",
    color:"white",
    fontSize:15,
  },
  topBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom:'10%'
  },
  gridBlock: {
    width: 320,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});
