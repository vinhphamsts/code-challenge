import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest';
import Button from '../Button.jsx';

describe('Button testing', () => {
	test('verifying the label', () => {
		render(<Button label="Execution" />);
		const button = screen.getByText(/execution/i);
		expect(button).toBeDefined();
	});
	test('verifying secondary button', () => {
		render(<Button label="Next" secondary />);
		const button = screen.getByText(/next/i);
		expect(button).toBeDefined();
	})
})
