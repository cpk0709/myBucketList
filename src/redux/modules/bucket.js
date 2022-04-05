// Actions
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';

const initialState = {
    // list:['영화관가기','리액트 공부하기','여행가기','스카이다이빙']
    list:[
        // {id:Math.random(),text:"영화관가기", completed:false},
        // {id:Math.random(),text:"리액트 공부하기", completed:false},
        // {id:Math.random(),text:"여행가기", completed:false},
        // {id:Math.random(),text:"스카이다이빙", completed:false}
    ]
}

// Action Creators
export function createBucket(bucket) {
    return { type: CREATE, bucket };
    }

export function deleteBucket(bucket_id){
    console.log(bucket_id);
    return {type: DELETE,bucket_id};
}

export function updateBucket(bucket_id){
    console.log(bucket_id);
    return {type:UPDATE,bucket_id};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "bucket/CREATE":{
        const new_bucket_list = [...state.list,{id:Math.random(),text:action.bucket,completed:false}];
        return {list : new_bucket_list};
    }
    case "bucket/DELETE":{
        const new_bucket_list = state.list.filter((bucket,index)=>bucket.id !== Number(action.bucket_id));
        
        return {list : new_bucket_list};
    }
    case "bucket/UPDATE":{
        console.log("!!");
        const new_bucket_list = state.list.map((bucket,index)=>{
            return bucket.id === Number(action.bucket_id)?{...bucket,completed:true}:bucket;
        });
        // console.log({list : new_bucket_list});
        return {list : new_bucket_list};
    }

    default: return state;
    }
}