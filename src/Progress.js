import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Progress = (props) => {
    const bucket_list = useSelector((state)=>state.bucket.list);
    let count = 0;
    bucket_list.map((b,idx)=>{
        if(b.completed){
            count++;
        }
    });


    return (
        <ProgressBar>
            <HighLight width={(count/bucket_list.length)*100+"%"}/>
            <Dot/>
        </ProgressBar>
    )
}

export default Progress;

const ProgressBar = styled.div`
    background-color:#eee;
    width:100%;
    height:1rem;
    border-radius:10px;
    display:flex;
    align-items:center;
`;

const HighLight = styled.div`
    background-color:#a8fff7;
    width:${(props)=>props.width};
    height:1rem;
    transition:all 1s;
    border-radius:10px;
`;

const Dot = styled.div`
    width:25px;
    height:25px;
    background-color:#fff;
    border:5px solid #a8fff7;
    border-radius:100%;
    margin:0px 0px 0px -20px;
`;