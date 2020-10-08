export const INIT_STATE="INIT_STATE"
export const LOAD_DATA="LOAD_DATA"
export const THEME_CHANGE="THEME_CHANGE"
import axios from 'axios'

const url='http://ic.snssdk.com/2/article/v25/stream/?count=20&min_behot_time=1504621638&bd_latitude=4.9E-324&bd_longitude=4.9E-324&bd_loc_time=1504622133&loc_mode=5&loc_time=1504564532&latitude=35.00125&longitude=113.56358166666665&city=%E7%84%A6%E4%BD%9C&lac=34197&cid=23201&iid=14534335953&device_id=38818211465&ac=wifi&channel=baidu&aid=13&app_name=news_article&version_code=460&device_platform=android&device_type=SM-E7000&os_api=19&os_version=4.4.2&uuid=357698010742401&openudid=74f06d2f9d8c9664'
export function initState(){
    return dispatch=>{
        axios.get(url)
        .then(res=>{
            // console.log(res.data.data)
            dispatch({
                type:INIT_STATE,
                initLists:res.data.data
            })
        })
        .catch(err=>{
            dispatch({
                type:"FAIL",
                msg:err
            })
        })
    }
}

export const loadData=()=>{
    return dispatch=>{
        axios.get(url)
        .then(res=>{
            console.log(res)
            dispatch({
                type:LOAD_DATA,
                newLists:res.data.data
            })
        })
        .catch(err=>{
            dispatch({
                type:"FAIL",
                msg:err
            })
        })
    }
}
export const themeChange=()=>{
    return {
        type:THEME_CHANGE
    }
}