import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';   //fireEvent allows you to simulate user actions such as clicks, changes, key presses, etc
import '@testing-library/jest-dom';
import { PasswordValidator } from './PasswordValidator';

describe('PasswordValidator', () => {
    const mockOnPasswordChange = jest.fn();

    beforeEach(() => {
    render(<PasswordValidator onPasswordChange={mockOnPasswordChange} />);
});

    test('renders password input', () => {
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
});

    test('shows suggestion for short password', () => {
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: 'short' } });
    expect(screen.getByText('Password should be at least 8 characters long')).toBeInTheDocument();
});

    test('shows suggestion for missing number', () => {
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: 'longpassword' } });
    expect(screen.getByText('Add at least one number')).toBeInTheDocument();
});

    test('shows suggestion for missing uppercase and lowercase', () => {
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: 'password123' } });
    expect(screen.getByText('Include both upper and lower case letters')).toBeInTheDocument();
});

    test('shows suggestion for missing special character', () => {
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: 'Password123' } });
    expect(screen.getByText('Include at least one special character')).toBeInTheDocument();
});

    test('calls onPasswordChange with correct arguments for valid password', () => {
    const input = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(input, { target: { value: 'StrongPassword123!' } });
    expect(mockOnPasswordChange).toHaveBeenCalledWith('StrongPassword123!', true);
});
});