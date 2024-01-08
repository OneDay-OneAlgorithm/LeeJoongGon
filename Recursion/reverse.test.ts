import reverse from './reverse';

describe('reverse', () => {
  it('주어진 문자열을 역순으로 뒤집어서 반환', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('world')).toBe('dlrow');
    expect(reverse('')).toBe('');
    expect(reverse('a')).toBe('a');
    expect(reverse('12345')).toBe('54321');
  });
});
