import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

const NavBar = () => {
  const handleBookmarkClick = () => {

    console.log('Le bouton Bookmark a été cliqué');
  };

  return (
    <div>
      <div>
        <button onClick={handleBookmarkClick} className={styles.nav_item}>
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
      <div>
        <img src="logo.png" alt="Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default NavBar;
