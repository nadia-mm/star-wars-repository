import './navbar.css';
import Hamburger from 'hamburger-react';

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="/home">Home</a>
        <a href="/people">People</a>
        <a href="/planets">Planets</a>
        <a href="/starships">Starships</a>
        <a href="/films">Films</a>
      </div>
      <div className="navbar__mobile">
        <Hamburger
          onToggle={(toggled) => {
            var menuList = document.getElementsByClassName('burgerMenu')
            var content = document.getElementsByClassName('content')
            if (toggled) {
              menuList[0].style.display = 'block'
              content[0].style.marginTop = '100px'
            } else {
              menuList[0].style.display = 'none'
              content[0].style.marginTop = '30px'
            }
          }}
        />

        <div className="burgerMenu">
          <a href="/home">Home</a>
          <a href="/people">People</a>
          <a href="/planets">Planets</a>
          <a href="/starships">Starships</a>
          <a href="/films">Films</a>
        </div>
      </div>
    </>
  );
};
