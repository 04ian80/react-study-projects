import React, { useState } from 'react';
import Dday from './Dday';
import styled from 'styled-components';

export default function SetDday() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [list, setList] = useState([]);
  const [userInputs, setUserInputs] = useState({
    dDayName: '',
    date: '',
  });

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
    for (let i = 0; i < 2; i++) {
      e.target[i].value = '';
    }
    setUserInputs({ dDayName: '', date: '' });
  };

  const deleteItem = (e) => {
    const key = e.target.id;
    list.splice(key, 1);
    setList([...list]);
  };

  return (
    <>
      <FormStyle name='isSubmit' onSubmit={handleSubmit}>
        <DDayInputStyle
          name='dDayName'
          type='text'
          placeholder="What's your D-day?"
          onChange={handleChange}
        />
        <DDayInputStyle name='date' type='date' onChange={handleChange} />
        <AddDdayBtn type='submit' value='+' />
      </FormStyle>
      <DDayStyle>
        {isSubmit &&
          list
            .map((d, idx) => (
              <Dday info={d} key={idx} id={idx} delete={deleteItem} />
            ))
            .reverse()}
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

const DDayInputStyle = styled.input`
  margin-bottom: 15px;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  background-color: #ddbea9;

  &:focus {
    outline-style: none;
    background-color: rgba(0, 0, 0, 0.1);
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
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #6b705d;
  }
`;

const DDayStyle = styled.div`
  margin-top: 260px;
`;
