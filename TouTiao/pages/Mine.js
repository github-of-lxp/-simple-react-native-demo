import React,{useContext} from 'react'
import { themeContext } from '../context/index'
import { View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,StatusBar} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { themeChange } from '../store/action' 

const mapDispatchToProps = dispatch => {
    return {
      themeChange:()=>dispatch(themeChange())
    }
  }
function Mine(props){
    const context=useContext(themeContext)
    const theme=context.theme
    const mainBackgroundColor=context.mainBackgroundColor
    const itemBackgroundColor=context.itemBackgroundColor
    const elFontColor=context.elFontColor
    theme==="light"?StatusBar.setBarStyle("dark-content",true):StatusBar.setBarStyle("light-content",true)
    const styles=StyleSheet.create({
        textCenter:{
            textAlign:"center"
        },
        userInfoNew:{
            padding:20,
        },
        nav:{
            paddingTop:54,
            paddingHorizontal:20,
            flexDirection:"row",
            justifyContent:"space-between",
            backgroundColor:itemBackgroundColor,
            paddingBottom:10
        },
        flexRow:{
            flexDirection:"row"
        },
        flexColumn:{
            flexDirection:"column"
        },
        userInfo:{
            alignItems:"center",
            justifyContent:"space-between",
            padding:20,
        },
        centerContainer:{
            alignItems:"center"
        }
    })
    const mockUser=[{key:"头条",value:"104"},
                    {key:"获赞",value:"8.5万"},
                    {key:"粉丝",value:"114"},
                    {key:"关注",value:"174"}]
    const mockUserItem=[{key:"消息通知",value:<Ionicon name="notifications-outline" color="red" size={28} style={{textAlign:"center"}}/>},
                        {key:"收藏",value:<Ionicon name="heart-outline" size={28} color="red" style={{textAlign:"center"}}/>},
                        {key:"浏览历史",value:<Ionicon name="time-outline" size={28}  color="red" style={{textAlign:"center"}}/>},
                        {key:"下载管理",value:<Ionicon name="download-outline" size={28}  color="red" style={{textAlign:"center"}}/>}]
    const mockItem=[{key:"用户反馈",value:<Ionicon name="pencil-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"钱包",value:<Ionicon name="heart-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"广告推广",value:<Ionicon name="time-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"免流量服务",value:<Ionicon name="water-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"评论",value:<Ionicon name="document-text-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"点赞",value:<Ionicon name="thumbs-up-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:theme==="light"?"深色模式":"浅色模式",value:<TouchableOpacity onPress={()=>props.themeChange()} activeOpacity={1}><Ionicon name={theme==="light"?"moon-outline":"sunny-outline"} size={28} style={{textAlign:"center"}} color={elFontColor}/></TouchableOpacity>},
                    {key:"订单",value:<Ionicon name="document-text-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"购物车",value:<Ionicon name="cart-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                    {key:"圆梦公益",value:<Ionicon name="ribbon-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>}]
    const imageItem=[{title:"那年那兔那些事 第3集",image:<Image source={{uri:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2606287757,956662356&fm=26&gp=0.jpg"}} style={{height:90,width:160}}/>},
                    {title:"钱学森",image:<Image source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2247756178,4249152126&fm=26&gp=0.jpg"}} style={{height:90,width:160}}/>},
                    {title:"五星红旗迎风飘扬 第6集",image:<Image source={{uri:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3394188660,990676467&fm=15&gp=0.jpg"}} style={{height:90,width:160}}/>},
                    {title:"我爱我的祖国",image:<Image source={{uri:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3562518650,2899176610&fm=26&gp=0.jpg"}} style={{height:90,width:160}}/>},
                    {title:"闪闪的红星",image:<Image source={{uri:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=310057333,801608204&fm=26&gp=0.jpg"}} style={{height:90,width:160}}/>}]
    const mockCreateItem=[{key:"创作首页",value:<Ionicon name="bulb-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                          {key:"数据助手",value:<Ionicon name="laptop-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                          {key:"收益提现",value:<Ionicon name="game-controller-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>},
                          {key:"草稿箱",value:<Ionicon name="file-tray-full-outline" size={28} style={{textAlign:"center"}} color={elFontColor}/>}]
    return(
        <>  
            <View style={{flex:1,backgroundColor:mainBackgroundColor}}>
                <View style={styles.nav}>
                    <Ionicon name="scan-outline" size={24} color={elFontColor}></Ionicon>
                    <View style={{flexDirection:"row"}}>
                        <Ionicon name="mail-outline" size={24} style={{marginRight:20}} color={elFontColor}></Ionicon>
                        <Ionicon name="settings-outline" size={24} color={elFontColor}></Ionicon>
                    </View>
                </View>
                <ScrollView>
                <View style={[styles.flexRow,styles.userInfo]}>
                        <View style={[styles.centerContainer,styles.flexRow]}>
                            <Image 
                                source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3469327811,1792176904&fm=26&gp=0.jpg'}}
                                style={{height:50,width:50,borderRadius:100}}
                            />
                            <Text style={{marginLeft:20,fontSize:24,fontWeight:"600",color:theme==="light"?"#000":"#fff"}}>似水de-流年</Text>
                        </View>
                        <Text style={{color:elFontColor}}>个人主页
                        <Ionicon name="chevron-forward-outline" size={16}/></Text>
                </View>

                <View style={[styles.flexRow,styles.userInfoNew,{paddingTop:0}]}>
                    {mockUser.map(item=>(
                            <View style={[styles.flexColumn,{flex:1}]} key={item.key}>
                                <Text style={[{fontSize:16,color:elFontColor},styles.textCenter]}>{item.value}</Text>
                                <Text style={[{fontSize:14,color:elFontColor,marginTop:5},styles.textCenter]}>{item.key}</Text>
                            </View>
                        )
                    )}
                </View>

                <View style={[styles.flexRow,styles.userInfoNew,{marginHorizontal:10,backgroundColor:itemBackgroundColor,paddingHorizontal:10,borderRadius:10}]}>
                    {mockUserItem.map(item=>(
                        <View key={item.key} style={[{justifyContent:"center",flex:1},styles.flexColumn]}>
                            {item.value}
                            <Text style={[{fontSize:14,color:elFontColor,marginTop:5},styles.textCenter]}>{item.key}</Text>
                        </View>
                    ))}
                </View>

                <View style={[],{backgroundColor:itemBackgroundColor,marginHorizontal:10,marginTop:10,paddingVertical:15,borderRadius:10}}>
                    <View style={[styles.flexRow]}>
                        <Text style={{fontSize:18,fontWeight:"600",paddingLeft:10,color:elFontColor}}>放映厅</Text>
                        <Text style={{fontSize:16,color:"#999999",left:270}}>全部<Ionicon name="chevron-forward-outline" size={20}/></Text>
                    </View>
                    
                    <ScrollView style={[{paddingHorizontal:10}]} horizontal={true} showsHorizontalScrollIndicator={false}>
                        
                        {imageItem.map(item=>(
                            <View key={item.title} style={[styles.flexColumn,{paddingRight:20,paddingTop:20}]}>
                                {item.image}
                                <Text style={[{fontSize:14,color:elFontColor,marginTop:10,fontSize:14}]}>{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={{backgroundColor:itemBackgroundColor,marginHorizontal:10,marginTop:10,paddingTop:15,borderRadius:10}}>
                    <Text style={{fontSize:18,fontWeight:"600",paddingLeft:10,color:elFontColor}}>创作中心</Text>
                    <View style={[styles.flexRow,{paddingHorizontal:10,flexWrap:"wrap"}]}>
                        
                        {mockCreateItem.map(item=>(
                            <View key={item.key} style={[{justifyContent:"center",width:93,paddingVertical:10},styles.flexColumn]}>
                                {item.value}
                                <Text style={[{fontSize:14,color:elFontColor,marginTop:5},styles.textCenter]}>{item.key}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={[],{backgroundColor:itemBackgroundColor,marginHorizontal:10,marginTop:10,paddingTop:15,borderRadius:10,marginBottom:30}}>
                    <Text style={{fontSize:18,fontWeight:"600",paddingLeft:10,color:elFontColor}}>更多服务</Text>
                    <View style={[styles.flexRow,{paddingHorizontal:10,flexWrap:"wrap"}]}>
                        
                        {mockItem.map(item=>(
                            <View key={item.key} style={[{justifyContent:"center",width:93,paddingVertical:10},styles.flexColumn]}>
                                {item.value}
                                <Text style={[{fontSize:14,color:elFontColor,marginTop:5},styles.textCenter]}>{item.key}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                </ScrollView>
            </View>
        </>
    )
}

export default connect(null,mapDispatchToProps)(Mine)