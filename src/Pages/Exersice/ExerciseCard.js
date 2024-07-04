import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const navigate = useNavigate(); // Import and use the useNavigate hook

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} onClick={() => {
      navigate('/Exercise');
    }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="button-wrapper">
        <Button sx={{ color: '#fff', background: '#353535', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ color: '#fff', background: '#00B4D8', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </div>
      <Typography color="orange" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
