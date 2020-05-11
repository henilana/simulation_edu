import React from 'react';

function SubHeader(props){
    return(
            <div>
                <p className="text-secondary d-inline-block">{props.SubTitle}</p>
            </div>
            )
}
export default SubHeader;