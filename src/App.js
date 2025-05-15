import React, { useState } from 'react';
import './App.css';

function ImageComponent() {
  const [imageSrc, setImageSrc] = useState('img/otherImg/MainPage/1.jpg');

  const changeImage = () => {
    const newImage = imageSrc === 'img/otherImg/MainPage/1.jpg' ? 'img/otherImg/MainPage/2.jpg' : 'img/otherImg/MainPage/1.jpg';
    setImageSrc(newImage);
  };

  return (
    <div>
      <h2>Изображение с использованием React Hooks</h2>
      <img src={imageSrc} alt="Dynamic" className="galeruLinks" />
      <button onClick={changeImage}>Изменить изображение</button>
      <br></br>
      <br></br>
    </div>
  );
}

function FormWithValidation() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.keyCode === 32) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: '', email: '' };


    if (!formData.name) {
      newErrors.name = 'Имя обязательно';
    } else if (/[\d!@#$%^&*()+=,./?;:'"<>{}\\|_]/.test(formData.name)) {
      newErrors.name = 'Имя не должно содержать цифр или специальных символов';
    } else if (/^\s|\s$|\s{2,}/.test(formData.name)) {
      newErrors.name = 'Имя не должно содержать пробелы в начале или конце и дубликаты пробелов';
    }

    if (!formData.email) {
      newErrors.email = 'Электронная почта обязательна';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Введите правильный email';
    } else if (formData.email.startsWith('.') || formData.email.endsWith('.')) {
      newErrors.email = 'Неправильный формат электронной почты';
    } else if (/\.{2,}/.test(formData.email)) {
      newErrors.email = 'Две точки подряд недопустимы в электронной почте';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      alert('Форма успешно отправлена!');
    }
  };

  return (
    <div>
      <h2>Форма с валидацией</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Запрещаем пробел в поле email
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <button type="submit">Отправить</button>
      </form>
      <br />
    </div>
  );
}

function App() {
  const toggleTheme = () => {
    const themeToggleButton = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    themeToggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");

      if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  };

  return (
    <div>
      <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>Переключить тему</button>

      <header>
        <div className="container">
          <div className="contentBox headerBox">
            <div className="box logoBox">
              <a href="index.html">
                <img src="img/favicon/12.png" alt="aaa" />
              </a>
            </div>
            <div className="box ourAdvabtages">
              <ul>
                <li>
                  <img src="img/IcoLogo/quality.png" alt="качество нашего товара" />
                  <p>Гарантируем высокое качество тренажеров и услуг.</p>
                </li>
                <li>
                  <img src="img/IcoLogo/design.png" alt="персональные тренировки" />
                  <p>Индивидуальные тренировки под ваши цели и потребности.</p>
                </li>
                <li>
                  <img src="img/IcoLogo/warehouse.png" alt="оснащение зала" />
                  <p>Современное оборудование и комфортная атмосфера.</p>
                </li>
              </ul>
            </div>
            <div className="box contactsBox">
              <ul>
                <li>
                  <img src="img/IcoLogo/phone.png" alt="наш телефон" />
                  <a href="tel:+375292356331">+375 (29) 235-63-31</a>
                </li>
                <li>
                  <img src="img/IcoLogo/pngwing(7).png" alt="электронная почта" />
                  <a href="mailto:adrenalin-fitness@mail.ru" target="_blank" rel="noopener noreferrer">
                    adrenaline-fitness@mail.ru
                  </a>
                </li>
                <li>
                  <img src="img/IcoLogo/instagramm.png" alt="наш инстаграмм" />
                  <a href="https://www.instagram.com/adrenalin.belarus/" target="_blank" rel="noopener noreferrer">
                    adrenalin.belarus
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <ImageComponent />
          <FormWithValidation />

          <section className="galery">
            <a href="index.html" target="_self" className="galeruLinks">
              <img src="img/otherImg/MainPage/1.jpg" alt="" className="galeryItem" />
              <p className="galeryTxt">Главная</p>
            </a>
            <a href="page-withus.html" className="galeruLinks">
              <img src="img/otherImg/MainPage/2.jpg" alt="" className="galeryItem" />
              <p className="galeryTxt">Услуги</p>
            </a>
            <a href="page-withkorp.html" className="galeruLinks">
              <img src="img/otherImg/MainPage/3.jpg" alt="" className="galeryItem" />
              <p className="galeryTxt">Расписание</p>
            </a>
            <a href="page-about-us.html" className="galeruLinks">
              <img src="img/otherImg/MainPage/4.jpeg" alt="" className="galeryItem" />
              <p className="galeryTxt">О нас</p>
            </a>
            <a href="page-contacts.html" className="galeruLinks">
              <img src="img/otherImg/MainPage/5.jpg" alt="" className="galeryItem" />
              <p className="galeryTxt">Контакты</p>
            </a>
          </section>

          <section>
            <article>
              <h2>Как мы работаем</h2>
              <div className="markeredTekst">
                <span>1</span>
                <ol>
                  Запись на занятия. Вы можете сделать это любым удобным способом:
                  <li>заполнив форму на сайте,</li>
                  <li>связаться с нами по телефону,</li>
                  <li>также вы можете написать нам в Instagram.</li>
                </ol>
              </div>
              <div className="markeredTekst">
                <span>2</span>
                <p>После записи вы получите подтверждение и все инструкции по занятиям.</p>
              </div>
              <div className="markeredTekst">
                <span>3</span>
                <p>Приходите в зал в спортивной форме и с хорошим настроением!</p>
              </div>
              <div className="markeredTekst">
                <span>4</span>
                <p>Наш тренер проведет для вас разминку и расскажет о тренировочном процессе.</p>
              </div>
              <div className="markeredTekst">
                <span>5</span>
                <p>После тренировки вы можете обсудить результаты и задать вопросы тренеру.</p>
              </div>
              <div className="markeredTekst">
                <span>6</span>
                <p>Мы всегда готовы поддержать вас на пути к вашим спортивным целям!</p>
              </div>
            </article>
          </section>

          <section className="OurWork">
            <article>
              <h2>Где мы работаем?</h2>
            </article>
          </section>
        </div>
      </main>

      <footer>
        <div>
          <section className="mapAndCopyright">
            <div className="map">
              <iframe
                title="Google Map"
                data-src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d107790.38507069457!2d27.534107329261015!3d53.89906014979795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JDQtNGA0LXQvdCw0LvQuNC9!5e1!3m2!1sru!2sby!4v1739980428644!5m2!1sru!2sby"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="copyright">
              <p>© 2025 Адреналин</p>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;