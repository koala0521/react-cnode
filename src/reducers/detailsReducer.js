// 详情页

let initState = {
    loading:true,
    data:{
        title:"",
        author:{
            avatar_url:"",
            loginname:""
        },
        create_at:"",
        content:"",
        reply_count:0,
        replies:[],
        good:true
    }
};

function details( state=initState , action ){
    let { type ,data } = action;
    console.log(  type ,data  );
    
    switch ( action ) {  
        case "DETAIL_UPDATA":
        return ({ ...state , loading:false })
        case "DETAIL_UPDATA_SUCESS":
            return ({ loading:false , data })
        case "DETAIL_UPDATA_ERR":
            return state
        default:
            return state
    }

}

export default details