import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      mr.Lukas,try to say by pressing button below: <br /> 
      Add {isIncome ? 'income ' : 'expense '} 
      for {isIncome ? '100 zł ' : '50 zł '}  
      in Category {isIncome ? 'Salary ' : 'Dorm '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;
