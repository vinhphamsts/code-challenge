import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import ControlBar from '../ControlBar.jsx';

describe('Verifying ControlBar', () => {
	beforeEach(() => {
		const mockOnSelect = vi.fn();
		render(<ControlBar onSelect={mockOnSelect} />)
	})
	test('render ControlBar correctly', () => {
		const instructionElement = screen.findByText(/instructions/i);
		expect(instructionElement).toBeDefined();
	});

	test('verifying the selection method', () => {
		const tab = screen.getAllByRole('button');
		const tab1 = screen.findByText(/instructions/i);
		expect(tab1).toBeDefined();
		fireEvent.click(tab[0]);
		const tab2 = screen.findByText(/output/i);
		expect(tab2).toBeDefined();
	});

});