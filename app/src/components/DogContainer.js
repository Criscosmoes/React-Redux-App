import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDogs, clearDogs } from "./../actions/index";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from './Spinner';

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
    border: 2px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
  }


  .dogs {
      margin: 1%; 
  }
`;

const DogContainer = (props) => {
  console.log(props);

  const renderedList = props.dogs.map((cur, index) => {
    return (
        <AnimatePresence>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          key={index}
          className="dogs"
        >
          <img src={cur} />
        </motion.div>
      </AnimatePresence> 
    );
  });

  return (
    <StyledDogContainer>
      <button onClick={props.fetchDogs}>Add!</button>
      <button onClick={props.clearDogs}>Clear List!</button>
      <div className="dog-container">{renderedList}</div>
    </StyledDogContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};

export default connect(mapStateToProps, { fetchDogs, clearDogs })(DogContainer);



{/* <AnimatePresence>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          key={index}
          className="dogs"
        >
          <img src={cur} />
        </motion.div>
      </AnimatePresence> */}