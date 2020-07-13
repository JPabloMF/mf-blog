/* Sections */
import Home from '../screens/home';
import Topics from '../screens/topics';

/* Topics */
import Html from '../screens/topics/html'
import Css from '../screens/topics/css'
import Javascript from '../screens/topics/js';
import React from '../screens/topics/react';
import Git from '../screens/topics/git';
import Blender from '../screens/topics/blender';
import Godot from '../screens/topics/godot';
import Pixelart from '../screens/topics/pixelArt';
import English from '../screens/topics/english';

export const ROUTES = {
  sections: [
    { route: '/', component: Home },
    { route: '/Home', component: Home },
    { route: '/Topics', component: Topics }
  ],
  topics: [
    { route: '/Topics/Html', component: Html },
    { route: '/Topics/Css', component: Css },
    { route: '/Topics/Js', component: Javascript },
    { route: '/Topics/React', component: React },
    { route: '/Topics/Git', component: Git },
    { route: '/Topics/Blender', component: Blender },
    { route: '/Topics/Godot', component: Godot },
    { route: '/Topics/Pixelart', component: Pixelart },
    { route: '/Topics/English', component: English },
  ]
};
