import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import SideBar from '../../components/sidebar';
import ToolBar from '../../components/toolbar';
import ContentWrapper from '../../components/contentWrapper';

/* utils */
import { isMobile } from '../../utils';

const Main = () => {
  const [openMenu, setOpenMenu] = useState(isMobile.any() ? false : true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <Router>
        <ToolBar openMenu={openMenu} setOpenMenu={handleOpenMenu} />
        <SideBar openMenu={openMenu} />
        <ContentWrapper openMenu={openMenu} />
      </Router>
    </div>
  );
};

export default Main;
