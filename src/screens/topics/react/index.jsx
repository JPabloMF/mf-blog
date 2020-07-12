import React from 'react';
import PropTypes from 'prop-types';

const ReactComponent = (props) => {
  return(
  	<div>ReactComponent</div>
  );
};

ReactComponent.propTypes = {
  props: PropTypes.object.isRequired
};

export default ReactComponent;