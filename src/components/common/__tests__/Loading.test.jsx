import { render, screen } from '@testing-library/react';
import { describe, test, vi, expect, beforeEach } from 'vitest';
// import { Loading } from '../Loading.jsx';

describe('Verifying Loading component', () => {
	beforeEach(() => {
		vi.doUnmock('react-redux');
		vi.resetModules();
	});

	test('Not rendering the loading icon', async () => {
		vi.doMock('react-redux', () => ({
			useSelector: vi.fn(() => false),
		}));
		const { Loading } = await import('../Loading');
		render(<Loading/>);
		let icon;
		try {
			icon = screen.getByRole('img');
		} catch (e) {
			expect(icon).not.toBeDefined();
		}
	});

	test('Rendering the loading icon', async () => {
		vi.doMock('react-redux', () => ({
			useSelector: vi.fn(() => true),
		}));
		const { Loading } = await import('../Loading');

		render(<Loading/>);

		const icon = screen.getByRole('img');
		expect(icon).toBeDefined();
	});
});