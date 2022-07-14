import React, { useState } from 'react';
import Dday from './Dday';
import styled from 'styled-components';

export default function SetDday() {
  const [userInputs, setUserInputs] = useState({
    dDayName: '',
    date: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [list, setList] = useState([]);
  // const [id, setId] = useState(1);

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInputs.dDayName === '' || userInputs.date === '') {
      return;
    } else {
      setIsSubmit(true);
      setList([...list, userInputs]);
    }
    // setId(id + 1);
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
      <DDayStyle>
        {isSubmit && list.map((d, idx) => <Dday info={d} key={idx} />)}
      </DDayStyle>
    </>
  );
}

const FormStyle = styled.form`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 96px;
  padding: 10px 0;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const DDayNameStyle = styled.input`
  margin-bottom: 15px;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  background-color: rgba(84, 166, 145, 0.1);

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

const DDayStyle = styled.div`
  // &:first-child {
  margin-top: 260px;
  // }
`;
