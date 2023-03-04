import React from 'react';

const styles = {
  Style: {
    paddingLeft: '15%',
  },
};

function Footer() {
  return (
    <div style={styles.Style}>
      <ul>
                <li><a href="https://github.com/Abhit-Singh" className="fa fa-github" target="_blank"></a></li>
                <li><a href="https://www.linkedin.com/" className="fa fa-linkedin" target="_blank"></a></li>
                <li><a href="https://www.facebook.com/" className="fa fa-facebook" target="_blank"></a></li>
              </ul>
    </div>
  );
}

export default Footer;
