import React from 'react'
import styled from 'styled-components'; 
import { connect } from 'react-redux';
import { fetchDogs, clearDogs } from './../actions/index';


const StyledDogContainer = styled.div`

& {
 
}

.dog-container {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-wrap: wrap; 
}



img {
    height: 300px; 
    width: 350px; 
    margin: 1%; 
}

`

const DogContainer = (props) => {

    

    console.log(props)

    const renderedList = props.dogs.map((cur, index) => {
        return (
            <img src={cur} key={index}  /> 
        )
    })

    return (
        <StyledDogContainer>
            <button onClick={props.fetchDogs}>Add!</button>
            <button onClick={props.clearDogs}>Clear List!</button>
            <div className="dog-container">
                {renderedList}
            </div>
        </StyledDogContainer>
    )
}

const mapStateToProps = state => {


    return {
        dogs: state.dogs, 
    }
}

export default connect(mapStateToProps, { fetchDogs, clearDogs })(DogContainer)
