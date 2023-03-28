import { itSupportsClassName, itSupportsStyle } from '@klink-ui/tests';
import { Thumb, ThumbProps } from './Thumb';

const defaultProps: ThumbProps = {
  __staticSelector: 'Test',
  position: { x: 0.4, y: 0.5 },
  size: 'sm',
};

describe('@klink-ui/core/Thumb', () => {
  itSupportsClassName(Thumb, defaultProps);
  itSupportsStyle(Thumb, defaultProps);

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@klink-ui/core/Thumb');
  });
});
