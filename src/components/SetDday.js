import React, { useEffect, useState } from 'react';
import Dday from './Dday';
import styled from 'styled-components';

export default function SetDday() {
  const [userInputs, setUserInputs] = useState({
    dDayName: '',
    date: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    // setUserInputs(e.target.value);
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
    // const { dDayName, date } = userInputs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setList([...list, userInputs]);
    // console.log('userInputs');
    // console.log(userInputs);
    // console.log(list);
  };

  return (
    <>
      <FormStyle name='isSubmit' onSubmit={handleSubmit}>
        <DDayNameStyle
          name='dDayName'
          type='text'
          placeholder="What's your D-day?"
          onChange={handleChange}
        />
        <DDayNameStyle name='date' type='date' onChange={handleChange} />
        <AddDdayBtn type='submit' value='+' />
      </FormStyle>
      {isSubmit && list.map((d) => <Dday info={d} />)}
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
  transition: background-color 0.3s ease-in-out;

  &:-internal-autofill-selected {
    background-color: #fff;
  }

  &:focus {
    outline-style: none;
    background-color: rgba(84, 166, 145, 0.4);
    font-weight: 500;
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
