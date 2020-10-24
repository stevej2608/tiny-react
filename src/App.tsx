import React from 'react';

import './App.css';

interface Props {
  greeting: string;
}

function SideNav(props: {ref: any, onClick: any}) {
  return (
    <aside className="sidenav" ref={props.ref} onClick={props.onClick}>
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">Item One</li>
        <li className="sidenav__list-item">Item Two</li>
        <li className="sidenav__list-item">Item Three</li>
        <li className="sidenav__list-item">Item Four</li>
        <li className="sidenav__list-item">Item Five</li>
      </ul>
    </aside>
  )
}

function App(props: Props) {
  const { greeting } = props;

  let sidenavEl: HTMLElement

  function toggleClassName(el: HTMLElement, className: string) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  }

  // Open the side nav on click
  function menuIconEl_OnClick() {
    toggleClassName(sidenavEl, 'active');
  };

  // Close the side nav on click
  function sidenavCloseEl_OnClick() {
    toggleClassName(sidenavEl, 'active');
  };

  console.log('render()');
  return (
    <div className="grid-container">
      <div className="menu-icon">
        <i className="fas fa-bars header__menu" onClick={menuIconEl_OnClick}></i>
      </div>

      <header className="header">
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </header>

      <SideNav ref={(el: any) => sidenavEl=el} onClick={sidenavCloseEl_OnClick}/>

      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>

        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
        </div>

        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__copyright">&copy; 2018 MTH</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </footer>
    </div>
  );
}

export default App;
