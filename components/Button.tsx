import * as React  from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 100%;
  display: block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.8rem .75rem;
  font-size: 23px;
  font-weight: 500;
  line-height: 25px;
  cursor: pointer;
  background-color: ${(props) => props.outline === true ? '#ffffff' : '#000000'};
  color: ${(props) => props.outline === true? '#000000' : '#ffffff'};
  border: 3px solid #000000;
  box-sizing: border-box;
  outline: #000000;
  text-transform: ${(props) => props.textTransform || 'capitalize'};
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:active, &:hover, &:focus {
    background-color: ${(props) => props.outline === true ? '#ffffff' : '#000000'};
    color: ${(props) => props.outline === true? '#000000' : '#ffffff'};
    border: 3px solid #000000;
  }
`;

interface Props {
  children?: ReactNode;
  outline?: boolean;
  textTransform?: string;
  onClick?: Function;
};

const Button: React.FC<Props> = ({ children, outline, textTransform, onClick }) => {
  return (
    <ButtonWrapper outline={outline} textTransform={textTransform} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;