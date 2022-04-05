import React from "react";
import {useHistory} from "react-router-dom";

const NotFound = (props) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h1>잘못된 주소 입니다.</h1>
            <button onClick={goBack}>돌아가기</button>
        </div>
    )
}

export default NotFound;