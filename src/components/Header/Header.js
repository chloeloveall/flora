
// const Header = () => {
//   return (
//     <>
//       <h1>Flora</h1>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { BaseModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import styles from './Header.module.css';
import { Circle, Heading1, FloraRegular, FloraModal, NavList } from './styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.headerContent}>
        <div className={styles.contentLeft}>
          <FloraRegular>
            <Link to='/' className={styles.linkStyle}>Flora</Link>
          </FloraRegular>
        </div>
        <div className={styles.contentRight}>
        {/* <button className={hamburger} onClick={() => setOpen(true)}>Open custom modal</button> */}
          <div className={styles.hamburger} onClick={() => setOpen(true)} >
            <MenuIcon fontSize='large'/>
                {/* <div className={styles.bar, styles.bar1}></div>
                <div className={styles.bar, styles.bar2}></div> */}
          </div>
        </div>
      </div>
      <BaseModal
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
        contentTransition={{
          from: { background: '#879795', transform: 'translateY(-100%)' },
          enter: { background: '#3d4645', transform: 'translateY(0)' },
          leave: { background: '#879795', transform: 'translateY(-100%)' }
        }}
        contentProps={{ className: styles.staticStyles }}
      >
        <Circle>
          {/* <ModalTitle style={{ fontSize: '1rem' }}>My Custom Modal</ModalTitle> */}
          <FloraModal>Flora</FloraModal>
          <NavList>
            <Heading1>
              <Link to='/about'>About</Link>
            </Heading1>
          </NavList>
          <NavList>
            <Heading1>
              <Link to='/blog'>Blog</Link>
            </Heading1>
          </NavList>
          <NavList>
            <Heading1>
              <Link to='/store'>Store</Link>
            </Heading1>
          </NavList>
          <NavList>
            <Link to='/dashboard'>Dashboard</Link>
          </NavList>
          <NavList>
            <Link to='/settings'>Account Setting</Link>
          </NavList>
          <NavList>
            <Link to='/login'>Login / Register</Link>
          </NavList>
          <ModalCloseTarget>
            <button>Close</button>
          </ModalCloseTarget>
        </Circle>
      </BaseModal>
    </>
  );
}

export default Header;
