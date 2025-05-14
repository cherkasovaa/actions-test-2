import { describe, it, expect, vi, afterEach } from 'vitest';

describe('Application Entry Point', () => {
  const originalQuerySelector = document.querySelector;

  afterEach(() => {
    vi.clearAllMocks();

    document.querySelector = originalQuerySelector;

    vi.resetModules();
  });

  it('should use the element with id "root"', async () => {
    const mockRootElement = document.createElement('div');

    document.querySelector = vi.fn().mockImplementation((selector) => {
      if (selector === '#root') {
        return mockRootElement;
      }
      return null;
    });

    await import('./main');

    expect(document.querySelector).toHaveBeenCalledWith('#root');
  });

  it('should throw an error if root element is not found', async () => {
    document.querySelector = vi.fn().mockReturnValue(null);

    await expect(import('./main')).rejects.toThrow('Root element not found');
  });
});
