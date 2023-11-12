import { logout } from './logout';
import { remove } from '../../storage/index.js';

// Mock the remove function from '../../storage/index.js'
jest.mock('../../storage/index.js', () => ({
  remove: jest.fn(),
}));

describe('logout', () => {
  it('clears tokens from browser storage', () => {
    // Call the logout function
    logout();

    // Check if remove was called with the correct arguments for the token
    expect(remove).toHaveBeenCalledWith('token');

    // Check if remove was called with the correct arguments for the profile
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
