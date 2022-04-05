import React, { useRef } from "react";
import "./style.css"
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {useSelector} from "react-redux";

const BucketList = (props) => {

    const my_lists = useSelector((state) => state.bucket.list);
    console.log(my_lists);
    const history = useHistory();

    const moveToDetail = (id) => {
        history.push("/detail/"+id);
        
    };

    const list_ul = useRef(null);

    // const moveTop = () => {
    //     console.log(list_ul);
    //     // list_ul.current.scrollIntoView({
    //     //     behavior: 'smooth'
    //     //   });
    // };     
    
    return (
        <ListWrap>
            <ListStyle ref={list_ul}>
                {my_lists.map((bucket,index)=>{
                    return (
                        <ItemStyle completed={bucket.completed} onClick={() => moveToDetail(bucket.id)} key={index}>{bucket.text}</ItemStyle>
                    )
                })}
            </ListStyle>
            {/* <button onClick={()=>moveTop()}>TOP</button> */}
        </ListWrap>

    );
}

export default BucketList;

const ListWrap = styled.div`
    height:100%;
`;

const ListStyle = styled.ul`
    height:70%;
    overflow-x:hidden;
    overflow-y:auto;
`;

const ItemStyle = styled.li`
  padding: 16px;
  margin: 8px;
  border: 1px solid #ddd;
  color:${(props) => props.completed?"#00af46":"#000"};
  background-color:${(props)=>props.completed?"#a8fff7":"#cfc0ff"};
  &:hover{
    background-color:#b4ff9b;
  }
`;