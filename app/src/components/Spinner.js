import React from 'react'
import styled from 'styled-components'; 


const StyledSpinner = styled.div`


& {
    width: 5%; 
    margin: 1%; 
}

.ui {
    font-size: 2.5rem; 
    width: 100%; 
    height: 5vh; 
}

`

const Spinner = () => {
    return (
        <StyledSpinner>

            <div className="ui segment">
                <div className="ui active loader">
                </div>
            </div>
            
        </StyledSpinner>
    )
}

export default Spinner
