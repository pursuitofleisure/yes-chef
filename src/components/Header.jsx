import chefClaudeLogo from '../assets/Chef-Claude-Icon.png';

function Header() {
  return (
    <header className="main-header">
      <img
        src={chefClaudeLogo}
        alt="Chef Claude logo"
        className="main-header__logo"
      />
      <h1 className="main-header__h1">Yes, Chef</h1>
    </header>
  );
}

export default Header;
