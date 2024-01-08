import React from 'react';
import './App.css';
import Photo from './picture/photo.JPG';

function App() {

  return (
    <>
      <div className='scroll'>
        <div id='aboutMe' className='topnav'>
          <div className='menu'>
            <a href='#aboutMe' className='aboutMe'>Обо мне</a>
            <a href='#portfolio' className='portfolio'>Портфолио</a>
            <a href='#contacts' className='contacts'>Контакты</a>
          </div>
        </div>

        <div className='head'>
          <p className='p1'>
            Привет! Я <span className='span'>Кристина</span>.
          </p>
          <h1 className='h1'>
            Начинающий <br />Frontend-разработчик
          </h1>
          <img src={Photo} alt="Profile" className='profile' />
          <button className='buttResume' onClick={() => window.open('https://drive.google.com/file/d/18BwE-tSOK9DtH2_vMAghC8XHNFBxaLX7/view?usp=sharing')}>
            <span>Скачать Резюме</span>
          </button>
        </div> 

        <div>
          <h2 className='h2'>
            Обо мне:
          </h2>
          <p className='line'>
          Я - Кристина, начинающий frontend-разработчик. В последний год я занималась обучением в области frontend-разработки. Получала информацию из различных курсов, статей и видео, а также закрепляла теорию постоянной практикой в решении задач. Помимо теоретического изучения активно работала над созданием своего портфолио, которое вы можете увидеть по ссылке ниже. В нём собраны различные проекты, которые в том числе включают в себя работу с API, асинхронностью и адаптивностью. Также была использована Figma для поиска дизайнов pet-проектов. Я готова применить все свои знания, опыт и творческий подход, чтобы внести свой вклад в создание качественных проектов.
          </p>
        </div>

        <div>
          <h3 className='h3'>
            Ключевые навыки:
          </h3>
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

        <div>
          <h4 id='portfolio' className='h4'>
            Портфолио:
          </h4>
          <div className='portfolioCard'>
          <button className="card">
              <img src="https://github.com/LyubimtsevaK/calculator/raw/master/docs/images/image.png" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path />
                  </svg>                     
                  <img className="card__thumb" src="https://i.pinimg.com/564x/a5/e2/2a/a5e22a2ed6b519da85be4a9cfe23f70e.jpg" alt="" />
                  <div className="card__header-text">
                    <h5 className="card__title">
                      Калькулятор
                    </h5>
                  </div>
                </div>
                <a href="https://github.com/LyubimtsevaK/calculator" className="card__description" target="_blank" rel="noreferrer">
                Проект на GitHub
                </a>
                <a href="https://lyubimtsevak.github.io/calculator/" className="card__description" target="_blank" rel="noreferrer">
                GitPage
                </a>
              </div>
            </button>

            <button className="card">
              <img src="https://github.com/LyubimtsevaK/weather/raw/master/image-1.png" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path />
                  </svg>                     
                  <img className="card__thumb" src="https://i.pinimg.com/564x/a5/75/e4/a575e47d80d1f28be7c8a2216b84da4c.jpg" alt="" />
                  <div className="card__header-text">
                    <h6 className="card__title">
                      Погода
                    </h6>
                  </div>
                </div>
                <a href="https://github.com/LyubimtsevaK/weather" className="card__description" target="_blank" rel="noreferrer">
                Проект на GitHub
                </a>
                <a href="https://lyubimtsevak.github.io/weather/" className="card__description" target="_blank" rel="noreferrer">
                GitPage
                </a>
              </div>
            </button>
          </div>
        </div>

        <div>
          <h7 id='contacts' className='h7'>
            Контакты:
          </h7>
          <div className='contacts'>
          <div className='contg'>
              <img src='https://newsofrussia.ru/wp-content/uploads/2022/11/kak-nastroit-proxy-telegram-1.png' alt='' className='tg'/>
              <a href="https://t.me/lyubimtseva_k" className='textTg' target="_blank" rel="noreferrer">
                @lyubimtseva<span className='k'>_</span>k
              </a>
            </div>

            <div className='contg'>
              <img src='https://odvme.com/uploads/posts/2022-12/github.webp' alt='' className='tg'/>
              <a href="https://github.com/LyubimtsevaK" className='textTg' target="_blank" rel="noreferrer">
              GitHub
              </a>
            </div>

            <div className='contg'>
              <img src='https://opis-cdn.tinkoffjournal.ru/mercury/my-vam-pozvonim-7.xgcvz17rfd42..png' alt='' className='tg'/>
              <a href="https://career.habr.com/lyubimtsevak" className='textTg' target="_blank" rel="noreferrer">
              ХабрКарьера
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;