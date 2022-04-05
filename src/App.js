import './style.css';
import React from 'react';
import BucketList from './BucketList';
import { useRef } from 'react';
import styled from "styled-components";
import {Route,Switch} from "react-router-dom";
import Detail from './Detail';
import NotFound from './NotFound';
import {useDispatch} from 'react-redux';
import {createBucket} from "./redux/modules/bucket";
import Progress from './Progress';

function App() {

  const dispatch = useDispatch();
  // const [list,setList] = useState(['영화관가기','리액트 공부하기','여행가기','밥먹기']);

  // const text = useRef();
  const [text,setText] = React.useState();

  const getTextVal = (e) => {
    setText(e.target.value);
  }

  const addBucketList = () => {
    // setList([...list,text.current.value]);
    // dispatch(createBucket(text.current.value));
    dispatch(createBucket(text));
  }

  return (
    <AppWrap>
      <Container>
        <Title>
          내 버킷리스트
        </Title>
        <Progress/>
        <HeaderLine/>
        <Switch>
          <Route path="/" exact>
            <BucketList/>
          </Route>
          
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          
          <NotFound/>
        </Switch>
      </Container>
      <InputWrap>
          {/* <input type="text" ref={text}/> */}
          <input type="text" value={text} onChange={getTextVal}/>
          <button onClick={addBucketList}>추가하기</button>
      </InputWrap>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  height: 80vh;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const HeaderLine = styled.hr`
  margin: 16px 0;
`;

const InputWrap = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display:flex;
  & > * {
    padding:5px;
  }
  & input{
    border:2px solid #888;
    margin-right:10px;
    width:70%;
  }
  & input:focus{
    outline:none;
    border:2px solid #a673ff;
  }
  & button{
    width:25%;
    color: #fff;
    border:#a673ff;
    background-color:#a673ff;
  }
`;