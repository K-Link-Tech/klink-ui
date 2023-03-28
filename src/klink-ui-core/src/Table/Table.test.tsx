import { itSupportsSystemProps, itSupportsProviderVariant } from '@klink-ui/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@klink-ui/core/Table', () => {
  itSupportsProviderVariant(Table, defaultProps, 'Table');
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@klink-ui/core/Table',
    refType: HTMLTableElement,
    providerName: 'Table',
  });
});
