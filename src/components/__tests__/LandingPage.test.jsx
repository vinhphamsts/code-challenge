import { test, describe, vi, beforeEach } from 'vitest';
import { LandingPage } from '../LandingPage.jsx';
import { render, screen, fireEvent } from '@testing-library/react';

vi.mock('react-redux', () => {
	return {
		useDispatch: vi.fn(() => vi.fn()),
		useSelector: vi.fn(() => ({
			success: {
				status: { id: 3, description: 'Accepted'},

			}
		})),
	}
})
describe('Rendering LandingPage', () => {
	beforeEach(() => {
		render(<LandingPage />)
	});
	test('Render BatchControl correctly', () => {
		expect(screen.getByText(/previous/i)).toBeDefined();
		expect(screen.getByText(/next challenge/i)).toBeDefined();
		expect(screen.getByText(/Instructions/)).toBeDefined();
		expect(screen.getByText(/Output/)).toBeDefined();
	});
	test('Changing to tab Tests when clicking on Tests tab', () => {
		const testsTab = screen.getByText(/Tests/);
		fireEvent.click(testsTab);
		const batchTests = screen.getByTestId('Batch-Tests');
		expect(batchTests).toBeDefined();
	});
})