import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Components */
import SideBar from '../../components/sidebar';
import ToolBar from '../../components/toolbar';
import ContentWrapper from '../../components/contentWrapper';

/* utils */
import { isMobile } from '../../utils';

const Main = (props) => {
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

Main.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Main;
