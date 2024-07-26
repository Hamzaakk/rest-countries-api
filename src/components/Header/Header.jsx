import './header.css';
import Moon from '../../assets/moon.svg'
import MoonOutlined from '../../assets/moon-outline.svg'

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {/* <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i> */}
        {darkMode ?
         <img src={MoonOutlined} width={18} style={{ marginRight: 5 }}/> 
        : <img src={Moon} width={18} style={{ marginRight: 5}}/>
        }
        {darkMode ? ' Light' : ' Dark'} Mode
      </button>
    </header>
  );
};

export default Header;