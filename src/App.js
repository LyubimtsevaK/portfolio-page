import React from 'react';
import './App.css';
import Photo from './picture/photo.JPG'

// const MobileMenu = () => {
//   return (
//     <div className={'mobile-menu'}>
//       <a href='#aboutMe'>Обо мне</a>
//       <a href='#portfolio'>Портфолио</a>
//       <a href='#contacts'>Контакты</a>
//     </div>
//   );
// };


function App() {
  // const [isShown, setIsShown] = useState(false);
  // const toggleMobileMenu = () => {
  //   setIsShown(!isShown);
  // };

  return (
    <>
      <div className='topnav'>
        <div className='menu'>
          <a href='#aboutMe' className='aboutMe'>Обо мне</a>
          <a href='#portfolio' className='portfolio'>Портфолио</a>
          <a href='#contacts' className='contacts'>Контакты</a>
        </div>
      </div>

       {/* <div>
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}  */}

      <div className='head'>
        <p className='p1'>
          Привет! Я <span className='span'>Кристина</span>.
        </p>
        <h1 className='h1'>
          Начинающий Frontend-<br />разработчик
        </h1>
        <img src={Photo} alt="Profile" className='profile'/>
        <button className='buttResume' onClick={() => window.open('https://github.com/LyubimtsevaK')}>
          <span>Скачать Резюме</span>
        </button>
      </div> 
        
      <div>
        <h2 className='h2'>
          Ключевые навыки:
        </h2>
      </div>
      <div className="container">
        <button className='skill'>JavaScript</button>
        <button className='skill'>HTML</button>
        <button className='skill'>CSS</button>
        <button className='skill'>React</button>
        <button className='skill'>TypeScript</button>
        <button className='skill'>Node.js</button>
        <button className='skill'>Git</button>
      </div>
      </>
  );
}

export default App;
