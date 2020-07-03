import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Components */
import SideBar from '../../components/sidebar';
import ToolBar from '../../components/toolbar';

/* utils */
import { isMobile } from "../../utils";

const Main = (props) => {
  const [openMenu, setOpenMenu] = useState(isMobile.any() ? false : true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <ToolBar openMenu={openMenu} setOpenMenu={handleOpenMenu} />
      <SideBar openMenu={openMenu} />
    </div>
  );
};

Main.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Main;
