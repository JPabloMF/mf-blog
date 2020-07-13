import React from 'react';

import TopicHeader from '../../../components/topicHeader';

import godot from '../../../assets/logos/godot.png';

const Godot = (props) => {
  return (
    <div>
      <TopicHeader icon={godot} name="godot" />
    </div>
  );
};

export default Godot;