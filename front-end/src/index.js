import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostPage from './PostPage';
import NotFound from './components/NotFound';
import ShowPost from './ShowPost';
import { BrowserRouter, Match, Miss } from 'react-router';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Material themes
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <BrowserRouter>
          <div>
            <Match exactly pattern='/' component={App} />
            <Match exactly pattern='/posts' component={PostPage} />
            <Match exactly pattern='/posts/:postId' component={ShowPost} />
            <Miss component={NotFound} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>,
      document.querySelector('#root')
);
