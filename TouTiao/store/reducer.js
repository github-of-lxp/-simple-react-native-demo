import { combineReducers} from 'redux'
import { INIT_STATE,LOAD_DATA,THEME_CHANGE } from './action'
const themeState={
    theme:"light"
}
const newsState={
    lists:[]
}

function theme(state=themeState,action){
    switch(action.type){
        case THEME_CHANGE:
            return {
                theme:state.theme==="light"?"dark":"light"
            }
        default:
            return state
    }
}

function news(state=newsState,action){
    switch(action.type){
        case INIT_STATE:
            return {
                lists:action.initLists
            }
        case LOAD_DATA:
            return {
                lists:[...state.lists,...action.newLists]
            }
        default:
            return state
    }
}

const rootReducer=combineReducers({
    theme,
    news
})
export default rootReducer

