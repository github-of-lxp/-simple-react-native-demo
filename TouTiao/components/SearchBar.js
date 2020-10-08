import React,{useContext} from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { themeContext } from '../context/index'
function SearchBar(){
    
    const context=useContext(themeContext)
    const theme=context.theme
    const itemBackgroundColor=context.itemBackgroundColor
    const elFontColor=context.elFontColor
    return(
        <>
            <View style={[styles.wrapper,{backgroundColor:theme==="light"?"red":"rgb(233,67,74)"}]}>
                <View style={[styles.search,{backgroundColor:itemBackgroundColor}]}>
                    <Icon name="search-outline" color={elFontColor} size={18} style={{marginLeft:10,marginRight:5}}></Icon>
                    <TextInput placeholder="搜索或输入网址" placeholderTextColor={elFontColor}></TextInput>
                </View>
                <View style={{marginHorizontal:10,justifyContent:"center",alignItems:"center"}}>
                    <View style={{backgroundColor:"#fff",width:22,height:22,borderRadius:100,alignItems:"center",justifyContent:"center"}}>
                        <Icon name="add-outline" color="red" size={18}></Icon>
                    </View>

                    <Text style={{textAlign:"center",color:"rgb(253,253,253)",fontSize:12,fontWeight:"bold",marginTop:2}}>发布</Text>
                </View>
            </View>
        </>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        height:45,
        flexDirection:"row"
    },
    search:{
        flex:1,
        marginLeft:10,
        marginBottom:5,
        borderRadius:25,
        flexDirection:"row",
        alignItems:"center"
    }
})
export default SearchBar