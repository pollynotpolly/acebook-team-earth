
import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordValidator } from "../../src/components/Utilities/PasswordValidator";
import { describe, test, expect, beforeEach, vi } from 'vitest';

describe('PasswordValidator', () => {
    const mockOnPasswordChange = vi.fn();

    beforeEach(() => {
        render(<PasswordValidator onPasswordChange={mockOnPasswordChange} />);
    });

    test('renders password input', () => {
        expect(screen.getByPlaceholderText('Enter your password')).toBeTruthy();
    });

    test('shows suggestion for short password', () => {
        const input = screen.getByPlaceholderText('Enter your password');
        fireEvent.change(input, { target: { value: 'short' } });
        expect(screen.getByText('Password should be at least 8 characters long')).toBeTruthy();
    });

    test('shows suggestion for missing number', () => {
        const input = screen.getByPlaceholderText('Enter your password');
        fireEvent.change(input, { target: { value: 'longpassword' } });
        expect(screen.getByText('Add at least one number')).toBeTruthy();
    });

    test('shows suggestion for missing uppercase and lowercase', () => {
        const input = screen.getByPlaceholderText('Enter your password');
        fireEvent.change(input, { target: { value: 'password123' } });
        expect(screen.getByText('Include both upper and lower case letters')).toBeTruthy();
    });

    test('shows suggestion for missing special character', () => {
        const input = screen.getByPlaceholderText('Enter your password');
        fireEvent.change(input, { target: { value: 'Password123' } });
        expect(screen.getByText('Include at least one special character')).toBeTruthy();
    });

    test('calls onPasswordChange with correct arguments for valid password', () => {
        const input = screen.getByPlaceholderText('Enter your password');
        fireEvent.change(input, { target: { value: 'StrongPassword123!' } });
        expect(mockOnPasswordChange).toHaveBeenCalledWith('StrongPassword123!', true);
    });
});