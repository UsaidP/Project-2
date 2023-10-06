import css from './Navigation.module.css';
function Navbar() {
  return (
    <nav className={`${css.navigation} container`}>
      <div className='logo'>
        <img src='./logo.png' alt='logo' />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
