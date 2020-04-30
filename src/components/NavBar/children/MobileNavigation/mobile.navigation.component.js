import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TopNavigation } from './mobile.navigation.style';

const MobileNavigation = ({children, toggleMobileMenu, isOpenMobile}) => {
  const isActive = isOpenMobile ? 'active slideLeft' : 'hidden';

  return (
    <section className={`mobile-navigation-panel ${isActive}`}>
      <div className="mobile-navigation-panel__wrap">
        <TopNavigation>
          <div className="close-panel__toggle">
            <button type="button" onClick={toggleMobileMenu}>
              <FontAwesomeIcon className="icon" icon="times" />
            </button>
          </div>
        </TopNavigation>
        {children}
      </div>
    </section>
  );
};

export default MobileNavigation;