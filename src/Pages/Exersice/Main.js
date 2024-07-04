import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Exercises from './Exercises';
import SearchExercises from './SearchExercises';


const Main = () => {
  const location = useLocation();
  const { yourStateKey } = location.state;
  console.log(yourStateKey)
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      {/* <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} /> */}
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={yourStateKey} />
    </Box>
  );
};

export default Main;