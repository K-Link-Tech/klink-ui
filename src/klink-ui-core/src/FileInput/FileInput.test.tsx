import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itSupportsInputProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { FileInput, FileInputProps } from './FileInput';

const defaultProps: FileInputProps = {
  label: 'test-label',
};

describe('@klink-ui/core/FileInput', () => {
  checkAccessibility([
    <FileInput placeholder="test-input" />,
    <FileInput aria-label="test-input" />,
  ]);
  itSupportsProviderVariant(FileInput, defaultProps, 'FileInput', ['root', 'input', 'label']);
  itSupportsProviderSize(FileInput, defaultProps, 'FileInput', ['root', 'input', 'label']);
  itSupportsInputProps(FileInput, defaultProps, 'FileInput');
  itSupportsFocusEvents(FileInput, defaultProps, 'button');
  itSupportsSystemProps({
    component: FileInput,
    props: defaultProps,
    displayName: '@klink-ui/core/FileInput',
    refType: HTMLButtonElement,
    othersSelector: 'button',
    providerName: 'FileInput',
  });
});
