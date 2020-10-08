import React, { useEffect, useState,useContext } from 'react'
import { View,Text,RefreshControl,StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import SwiperBar from '../components/SwiperBar'
import { connect } from 'react-redux'
import { initState, loadData } from '../store/action' 
import { FlatList } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { themeContext } from '../context/index'
const mapStateToProps = state => {
    return {
      lists: state.news.lists
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        initState:()=>dispatch(initState()),
        loadData:()=>dispatch(loadData())
    }
}

function Home(props){
    useEffect(()=>{
        props.initState()
    },[])
    const context=useContext(themeContext)
    const theme=context.theme
    const mainBackgroundColor=context.mainBackgroundColor
    const itemBackgroundColor=context.itemBackgroundColor
    const elFontColor=context.elFontColor
    const FootComponent=()=>{
        return(
            <View style={{flex:1,margin:20}}>
                <Text style={{textAlign:"center",color:elFontColor}}>加载更多中……</Text>
            </View>
        )
    }
    const EmptyComponent=()=>{
        return(
            <View style={[styles.centerContainer]}>
                <Text style={[{fontSize:32},{color:elFontColor}]}>今日头条</Text>
            </View>
        )
    }
    const renderItem=({item})=>{
        return(
            <View style={{backgroundColor:itemBackgroundColor,paddingHorizontal:20,paddingTop:20}}>
                <Text style={{color:elFontColor,fontSize:20}}>{item.title}</Text>
            </View>
        )
    }
    const [loading,setLoading]=useState(false)
    function loadData(){
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },500)
    }
    const onMomentumScrollEnd=(e,state)=>{
        setPageIndex(parseInt(state.offset.x/state.width))
    }
    const [pageIndex,setPageIndex]=useState(1)
    const swiperItems=["关注","推荐","热榜","太原","抗疫","小说","视频","娱乐","问答","要闻"]
    return(
        <>  
            <View style={{backgroundColor:mainBackgroundColor,flex:1}}>
                <View style={{paddingTop:44,backgroundColor:theme==="light"?"red":"rgb(233,67,74)"}}>
                    <SearchBar />
                </View>
                <View>
                    <SwiperBar index={pageIndex} setIndex={setPageIndex} items={swiperItems}/> 
                </View>
                <Swiper 
                    style={styles.swiperWrapper} 
                    showsPagination={false} 
                    autoplay={false} 
                    loop={false} 
                    bounces={true} 
                    index={pageIndex} 
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    >
                    <View style={styles.centerContainer}>
                        <Text style={{fontSize:64,color:elFontColor}}>关注</Text>
                    </View>
                    <View style={styles.centerContainer}>
                        {props.lists.length>0?<FlatList
                            data={props.lists}
                            renderItem={renderItem}
                            ListFooterComponent={<FootComponent />}
                            keyExtractor={item=>item.abstract}
                            refreshControl={
                                <RefreshControl
                                    title="正在加载中……"
                                    color="#333333"
                                    refreshing={loading}
                                    onRefresh={loadData} />}
                        >
                        </FlatList>:<EmptyComponent />}
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>热榜</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>太原</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>抗疫</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>小说</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>视频</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>娱乐</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>问答</Text>
                    </View>
                    <View style={[styles.centerContainer,{backgroundColor:mainBackgroundColor}]}>
                        <Text style={{fontSize:64,color:elFontColor}}>要闻</Text>
                    </View>
                </Swiper>
                
            </View>
        </>
    )
}
const styles=StyleSheet.create({
    borderTest:{
        borderColor:"red",
        borderWidth:1,
        borderStyle:"solid"
    },
    centerContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    swiperWrapper:{

    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
