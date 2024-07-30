import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
    onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
    return (
    <ButtonContainer onClick={onClick}>
        Buscar
    </ButtonContainer>
    );
}
