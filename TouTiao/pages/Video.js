import React ,{useState,useContext} from 'react'
import { View } from 'react-native'
import SearchBar from '../components/SearchBar'
import SwiperBar from '../components/SwiperBar'
import { themeContext } from '../context/index'
function Video(){
    const context=useContext(themeContext)
    const mainBackgroundColor=context.mainBackgroundColor
    const [pageIndex,setPageIndex]=useState(1)
    const swiperItems=["关注","推荐","热榜","太原","抗疫","小说","视频","娱乐","问答","要闻"]
    return(
        <>
            <View style={{backgroundColor:mainBackgroundColor,flex:1}}>
                <View style={{paddingTop:44,backgroundColor:"red"}}>
                    <SearchBar />
                </View>
                <View>
                    <SwiperBar index={pageIndex} setIndex={setPageIndex} items={swiperItems}/> 
                </View>
            </View>
        </>
    )
}
export default Video