import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  useSidebarOpenState,
  Link,
} from '@backstage/core-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';
import GroupIcon from '@material-ui/icons/People';
import './Root.css';
import { FaDiscord } from 'react-icons/fa';
import QuizIcon from '@mui/icons-material/Quiz';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
  <Sidebar>
    <SidebarLogo />
    <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
      <SidebarSearchModal />
    </SidebarGroup>
    <SidebarDivider />
    <SidebarGroup label="Menu" icon={<MenuIcon />}>
     
      <SidebarItem icon={HomeIcon} to="" text="Home" />
      <MyGroupsSidebarItem
        singularTitle="My Group"
        pluralTitle="My Groups"
        icon={GroupIcon}
      />
      <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
      <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
      <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />
     
      <SidebarDivider />
    </SidebarGroup>
    <SidebarGroup label="Menu" icon={<MenuIcon />}>
      <MyGroupsSidebarItem
        singularTitle="My Group"
        pluralTitle="My Groups"
        icon={GroupIcon}
      />
      <SidebarItem
        icon={FaDiscord}
        to="https://canary.discord.com/"
        text="Discord"
        className="custom-icon"
      />

      <SidebarItem icon={FeedbackIcon} to="#" text="Feedbacks" />
      <SidebarItem icon={TipsAndUpdatesIcon} to="#" text="Updates" />
      <SidebarItem icon={QuizIcon} to="#" text="FAQ" />
    </SidebarGroup>

    <SidebarDivider />
    <SidebarSpace />
    <SidebarScrollWrapper>
      {/* Items in this group will be scrollable if they run out of space */}
    </SidebarScrollWrapper>
    <SidebarDivider />
    <SidebarGroup
      label="Settings"
      icon={<UserSettingsSignInAvatar />}
      to="/settings"
    >
      <SidebarSettings />
    </SidebarGroup>
  </Sidebar>
  {children}
</SidebarPage>
);
