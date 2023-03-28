import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@klink-ui/tests';
import { Prism, PrismProps } from './Prism';

const defaultProps: PrismProps = {
  children: 'test',
  withLineNumbers: true,
  language: 'tsx',
};

describe('@klink-ui/prism/Prism', () => {
  itSupportsProviderVariant(Prism, defaultProps, 'Prism');
  itSupportsSystemProps({
    component: Prism,
    props: defaultProps,
    displayName: '@klink-ui/prism/Prism',
    refType: HTMLDivElement,
  });

  it('renders tooltip based on noCopy prop', () => {
    const { container: withCopy } = render(<Prism {...defaultProps} noCopy={false} />);
    const { container: withoutCopy } = render(<Prism {...defaultProps} noCopy />);

    expect(withCopy.querySelectorAll('.klink-ui-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.querySelectorAll('.klink-ui-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const { container: withLineNumbers } = render(<Prism {...defaultProps} withLineNumbers />);
    const { container: withoutLineNumbers } = render(
      <Prism {...defaultProps} withLineNumbers={false} />
    );
    expect(withLineNumbers.querySelectorAll('.klink-ui-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.querySelectorAll('.klink-ui-Prism-lineNumber')).toHaveLength(0);
  });
});
