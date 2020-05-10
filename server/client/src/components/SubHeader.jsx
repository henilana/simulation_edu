import React from 'react';

function SubHeader(props){
    return(
            <div>
                <p className="w-25 text-secondary d-inline-block">{props.SubTitle}</p>
            </div>
            )
}
export default SubHeader;