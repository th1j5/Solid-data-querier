/* eslint-disable constructor-super */
import React from 'react';
import { Link } from 'react-router-dom';
import { PageNotFoundWrapper, PageNotFoundContent } from './page-not-found.style';

/**
 * A React component page that is displayed when there's no valid route. Users can click the button
 * to get back to the home/welcome page.
 */
const PageNotFound = () => {
  return (
    <PageNotFoundWrapper>
      <PageNotFoundContent>
        <img src="/img/404.svg" alt="404" />
        <h3>{'404 Page not found'}</h3>
        <p>{"You seem to want something you can't get"}</p>
        <div>
          <Link to="/" className="ids-link">
            {'Go back home?'}
          </Link>
        </div>
      </PageNotFoundContent>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
