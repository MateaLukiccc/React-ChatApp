const inChatReducer = (state = false, action)=>{
    switch(action.type){
        case "IN_CHAT":
            return true
        case "NOT_IN_CHAT":
            return false
        default:
            return false
    }
}

export default inChatReducer