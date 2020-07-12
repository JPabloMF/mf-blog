/* Sections */
import Home from '../screens/home';
import Topics from '../screens/topics';

/* Topics */
import Html from '../screens/topics/html'
import Css from '../screens/topics/css'
import Javascript from '../screens/topics/js';
import React from '../screens/topics/react';
import Git from '../screens/topics/git';
import Sass from '../screens/topics/sass';
import Godot from '../screens/topics/godot';
import Pixelart from '../screens/topics/pixelArt';

export const ROUTES = {
  sections: [
    { route: '/', component: Home },
    { route: '/Home', component: Home },
    { route: '/Topics', component: Topics }
  ],
  topics: [
    { route: '/Topics/Html', component: Html },
    { route: '/Topics/Js', component: Javascript },
    { route: '/Topics/Css', component: Css },
    { route: '/Topics/React', component: React },
    { route: '/Topics/Git', component: Git },
    { route: '/Topics/Sass', component: Sass },
    { route: '/Topics/Godot', component: Godot },
    { route: '/Topics/Pixelart', component: Pixelart },
  ]
};
