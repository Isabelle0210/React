import React from 'react';
import { InputContainer } from './styles';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange }: InputProps) {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
}