// 用户信息

let initState = {
    data:{
        avatar_url:"",
        create_at:"",
        loginname:"",
        recent_replies:[],
        recent_topics:[],
        score:""
    },
    loading:true
};

function user( state=initState , action ){
    let { type , data } = action;
    switch ( type ) {    
        case "USER_UPDATE":
            return {...state , loading:true}
        
        case "USER_UPDATE_SUCESS":
            return ({ data , loading:false })
        
        case "USER_UPDATE_ERR":
            return {...state , loading:false}            
            
        default:
            return state
    }

}

export default user