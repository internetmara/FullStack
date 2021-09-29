import React from 'react';

export default ({ footer }) => {
  return (
    <div className="product-footer">
      <h6 className="footer-text">Copyright © 2021 HashMaps. HashMaps is a registered trademarks of Jellybean Management Group, LLC. All Rights Reserved.</h6>
      <div className="social-container">
        <a href="https://internetmara.github.io/"><img className="socials" src="images/icons/Jellycopy.png"/></a>
        <a href="https://www.linkedin.com/in/marafinkel/"><img className="socials" src="images/icons/Linkedin.png"/></a>
        <a href="https://github.com/internetmara"><img className="socials" src="images/icons/GitHub.png"/></a>
      </div>
    </div>
  );
}

