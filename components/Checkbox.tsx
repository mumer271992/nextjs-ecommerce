import React, { ReactEventHandler } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 2.5rem;
  cursor: pointer;
  font-size: 28px;
  line-height: 30px;
  font-weight: 400;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: Capitalize;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border: 2px solid #000;
  }
  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #fff;
  }

/* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #fff;
  }

/* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

interface Props {
  label: string
  onChange: ReactEventHandler
  checked?: any
};

const Checkbox: React.FC<Props> = ({ label, onChange, checked }) => {
  return (
    <CheckboxWrapper>
      {label}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="checkmark"></span>
    </CheckboxWrapper>
  );
};

export default Checkbox;