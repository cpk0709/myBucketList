import React from 'react';
import {useParams,useHistory} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {deleteBucket,updateBucket} from './redux/modules/bucket';

const Detail = (props) => {
    const dispatch = useDispatch();
    // 버킷 ID가 들어있다.
    const params = useParams();
    const history = useHistory();
    // const bucket_index = params.index;
    
    // 버킷 ID를 가져온다. {index:0000} 이런식으로 넘어온다. 왜 저런 딕셔너리형태로 들어오는거지..
    const bucket_id = params.id;
    console.log(bucket_id);
    // state를 가져와서 그 중 버킷ID가 같은 딕셔너리를 담아줄 것이다.
    const bucketDetail = {};
    const bucket_list = useSelector((state) => state.bucket.list);

    // state에 list 전체가 들어있어서 map으로 버킷ID가 같은 녀석을 찾아서 bucketDetail에 담아줄 것이다.
    bucket_list.map((bucket) => {
        if(bucket.id === Number(bucket_id)){
            bucketDetail.id = bucket.id;
            bucketDetail.text = bucket.text;
            bucketDetail.completed = bucket.completed;
        }
    });

    const updateBucketList = () => {
        dispatch(updateBucket(bucket_id));
        history.goBack();
        
    }

    const deleteBucketList = () => {
        dispatch(deleteBucket(bucket_id));
        // history.push("/");
        history.goBack();
    }
    
    return(
        <div>
            {/* <h1>{bucket_list[bucket_index].text}</h1> */}
            <h1>{bucketDetail.text}</h1>
            <button onClick={()=>updateBucketList()}>완료하기</button>
            <button onClick={()=>deleteBucketList()}>삭제하기</button>
        </div>
    )
}

export default Detail;