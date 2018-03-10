// 首页列表状态

let initState = {
    data:[],
    loading:true
    // ,searchId:'all'
};

function indexList( state=initState , action ){
    let {data , type ,loading } = action;
    switch ( type ) {    
        default:
            return ({ ...state, data , loading })
            break;
    }

}

export default indexList