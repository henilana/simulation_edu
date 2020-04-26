import React from 'react';

function SubHeader(props){
    return(
            <div>
                <p>{props.title}<br/>{props.title}</p>
            <br/>
                <h1>{props.SubTitle}</h1>
            </div>
            )
}
export default SubHeader;