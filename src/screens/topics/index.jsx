import React from 'react';
import PropTypes from 'prop-types';

import TopicCard from '../../components/topicCard';

const Topics = (props) => {
  return (
    <div>
      <TopicCard />
    </div>
  );
};

Topics.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Topics;
