import { randomId } from './random-id';

describe('@klink-ui/hooks/random-id', () => {
  it('returns random id with klink-ui- prefix', () => {
    expect(randomId().includes('klink-ui-')).toBe(true);
    expect(randomId()).toHaveLength(18);
  });
});
