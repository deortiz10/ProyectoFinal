import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';

import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
 render(<App />, document.getElementById('render-target'));
});
