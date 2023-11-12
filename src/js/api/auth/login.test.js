import { login } from './login';
import { apiPath } from '../constants.js';
import { headers } from '../headers.js';
import { save } from '../../storage/index.js';

global.fetch = jest.fn();

// Mock the storage module
jest.mock('../../storage/index.js', () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe('login', () => {
  it('fetches and stores a token in browser storage on successful login', async () => {
    // Mock the fetch response for a successful login
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValueOnce({
        accessToken: 'testToken',
      }),
      statusText: 'OK',
    };
    global.fetch.mockResolvedValueOnce(mockResponse);

    // Call the login function
    await login('test@example.com', 'password123');

    // Check if fetch was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
      }),
      headers: headers('application/json'),
    });

    // Check if the save function was called with the correct arguments for the token
    expect(save).toHaveBeenCalledWith('token', 'testToken');
  });
});
