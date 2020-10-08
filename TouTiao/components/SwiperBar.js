import React, { useEffect, useRef,useContext } from 'react'
import { StyleSheet,ScrollView,Text,Animated, TouchableOpacity } from 'react-native'
import { themeContext } from '../context/index'
function SwiperBar(props){
    const context=useContext(themeContext)
    const itemBackgroundColor=context.itemBackgroundColor
    const elFontColor=context.elFontColor
    const move=useRef(new Animated.Value(26.5)).current
    const scrollview=useRef()
    const id=move.addListener((e)=>{
        if(e.value>185.5&&scrollview.current){
            scrollview.current.scrollTo({
                x:e.value-185.5,
                y:0,
                animated:true
            })
        }
    })
    useEffect(()=>{
        handlePressItem(props.index)
        return ()=>{
            move.removeListener(id)
        }
    },[props.index])
    const handlePressItem=(index)=>{
        Animated.timing(move,{
            toValue:(index*2+1)*26.5,
            duration:300,
            useNativeDriver:false
        }).start()
    }
    
    const navList=props.items.map((item,i)=>{
        return(
            <TouchableOpacity style={{paddingLeft:20,paddingRight:i===props.items.length-1?20:0}} key={i} onPress={()=>props.setIndex(i)} activeOpacity={1}>
                <Text style={[{color:i===props.index?"red":elFontColor},styles.navListText]}>{item}</Text>
            </TouchableOpacity>
        )
    })
    return(
        <>
            <ScrollView horizontal={true} style={[styles.container,{backgroundColor:itemBackgroundColor}]} showsHorizontalScrollIndicator={false} ref={scrollview}>
                <Animated.View style={[styles.move,{left:move}]}></Animated.View>
                {navList}
            </ScrollView>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        height:40,
        flexDirection:'row',
        borderBottomColor:"#dddddd",
        borderBottomWidth:1,
        borderStyle:"solid"
    },
    navListText:{
        fontSize:16,
        textAlign:"center",
        lineHeight:40
    },
    move:{
        position:"absolute",
        width:20,
        height:2,
        backgroundColor:"red",
        bottom:0,
    }
})
export default SwiperBar