import React from 'react';
import PropTypes from 'prop-types';
import styles from'./Jumbotron.module.css';

function Footer() {
   return (
      <div className={`container-fluid ${styles.jumbotron} p-5`}>
         <div className={`${styles['bg-content']} container`}>
            <h1>Footer</h1>
         </div>
      </div>
   );
}

export default Footer;