// 首页列表状态

let initState = {
    data:[],
    loading:true
};

function indexList( state=initState , action ){
    let {data , type ,loading } = action;
    switch ( type ) {  

        case "LIST_UPDATEING":
            return ({loading:true ,data:state.data })

        case "LIST_UPDATA_SUCESS":
            return ({ loading:false , data })
            
        case "LIST_UPDATA_ERR":
            return ({ data:state.data , loading:false })

        default:
            return state;
    }

}

export default indexList