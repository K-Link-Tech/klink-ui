import React, { useState } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { randomId, useMediaQuery } from '@k-link/hooks';
import { Notifications } from '@k-link/notifications';
import { ModalsProvider, ContextModalProps } from '@k-link/modals';
import { SpotlightProvider, SpotlightAction } from '@k-link/spotlight';
import { Text, Button, rem, em } from '@k-link/core';
import { IconSearch } from '@tabler/icons-react';
import MdxProvider from '../MdxPage/MdxProvider/MdxProvider';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { NAVBAR_BREAKPOINT } from './Navbar/Navbar.styles';
import { shouldExcludeNavbar, shouldExcludeHeader } from '../../settings/exclude-layout';
import { getDocsData } from './get-docs-data';
import useStyles from './Layout.styles';

export interface LayoutProps {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
}

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            group
            title
            order
            slug
            category
            description
            package
            search
          }
        }
      }
    }
  }
`;

const demonstrationModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function getActions(data: ReturnType<typeof getDocsData>): SpotlightAction[] {
  return data.reduce<SpotlightAction[]>((acc, part) => {
    if (!part || !Array.isArray(part.groups)) {
      return acc;
    }

    part.groups.forEach((group) => {
      if (group && Array.isArray(group.pages)) {
        acc.push(
          ...group.pages.map((item) => ({
            title: item.title,
            description: item.search || item.description,
            onTrigger: () => navigate(item.slug),
          }))
        );
      }
    });

    part.uncategorized
      .filter(
        (page) =>
          page.title.toLowerCase() !== 'getting started' &&
          !page.title.toLowerCase().includes('version')
      )
      .forEach((page) => {
        acc.push({
          title: page.title,
          description: page.search || page.description,
          onTrigger: () => navigate(page.slug),
        });
      });

    return acc;
  }, []);
}

export function LayoutInner({ children, location }: LayoutProps) {
  const navbarCollapsed = useMediaQuery(`(max-width: ${em(NAVBAR_BREAKPOINT)})`);
  const shouldRenderHeader = !shouldExcludeHeader(location.pathname);
  const shouldRenderNavbar = !shouldExcludeNavbar(location.pathname) || navbarCollapsed;
  const { classes, cx } = useStyles({ shouldRenderHeader });
  const [navbarOpened, setNavbarState] = useState(false);
  const data = getDocsData(useStaticQuery(query));

  return (
    <SpotlightProvider
      actions={getActions(data)}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search documentation"
      shortcut={['mod + K', 'mod + P', '/']}
      highlightQuery
      searchInputProps={{
        id: randomId(),
        name: randomId(),
        autoComplete: 'nope',
      }}
      transitionProps={{
        duration: 150,
        transition: {
          in: { transform: 'translateY(0)', opacity: 1 },
          out: { transform: `translateY(-${rem(20)})`, opacity: 0 },
          transitionProperty: 'transform, opacity',
        },
      }}
    >
      <Notifications />
      <div
        className={cx({
          [classes.withNavbar]: shouldRenderNavbar,
          [classes.withoutHeader]: !shouldRenderHeader,
        })}
      >
        {shouldRenderHeader && (
          <Header navbarOpened={navbarOpened} toggleNavbar={() => setNavbarState((o) => !o)} />
        )}

        {shouldRenderNavbar && (
          <Navbar data={data} opened={navbarOpened} onClose={() => setNavbarState(false)} />
        )}

        <main className={classes.main}>
          <div className={classes.content}>
            <ModalsProvider
              labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
              modals={{ demonstration: demonstrationModal }}
            >
              <MdxProvider>{children}</MdxProvider>
            </ModalsProvider>
          </div>
        </main>
      </div>
    </SpotlightProvider>
  );
}
