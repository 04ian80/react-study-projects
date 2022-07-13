import React, { useEffect, useState } from 'react';
import Dday from './Dday';
import styled from 'styled-components';

export default function SetDday() {
  // const [dDayName, setDDayName] = useState('');
  // const [date, setDate] = useState('');
  const [userInputs, setUserInputs] = useState({
    dDayName: '',
    date: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setUserInputs(e.target.value);
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUserInputs(([userInputs]: !userInputs.isSubmit));
    // setUserInputs(!userInputs.isSubmit);
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(userInputs);
  //   const { dDayName, date, isSubmit } = userInputs;
  //   console.log(`${dDayName} & ${date} & ${isSubmit}`);
  // }, []);

  return (
    <>
      <FormStyle name='isSubmit' onSubmit={handleSubmit}>
        <DDayNameStyle
          name='dDayName'
          type='text'
          placeholder="What's your D-day?"
          // maxLength={1}
          onChange={handleChange}
        />
        <DDayNameStyle name='date' type='date' onChange={handleChange} />
        <AddDdayBtn type='submit' value='+' />
      </FormStyle>
      {isSubmit && <Dday info={userInputs} />}
    </>
  );
}

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DDayNameStyle = styled.input`
  margin-bottom: 15px;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  transition: border-color 0.3s ease-in-out;

  &:-internal-autofill-selected {
    background-color: #fff;
  }

  &:focus {
    outline-style: none;
    border-bottom: 2px solid rgba(10, 110, 210, 0.6);
  }
`;

const AddDdayBtn = styled.input`
  padding: 10px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: #54a692;
`;
