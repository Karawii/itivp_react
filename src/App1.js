import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const currentPage = window.location.pathname.split("/").pop();

  return (
    <div>
      <button className="theme-toggle" onClick={toggleTheme}>
        Переключить тему
      </button>

      {/* HEADER */}
      <header>
        <div className="container">
          <div className="contentBox headerBox">
            {/* LOGO */}
            <div className="box logoBox">
              <a href="index.html">
                <img src="img/favicon/12.png" alt="aaa" />
              </a>
            </div>

            {/* Block with advantages */}
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

            {/* Contacts block */}
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
            {React.Children.toArray(
              [...document.querySelectorAll(".galeruLinks")].map((link) => {
                const linkHref = link.getAttribute("href");
                if (linkHref === currentPage) {
                  return <></>;
                }
                return link;
              })
            )}
          </section>

          <section className="OurWork">
            <aside id="refersSection" style={{ marginLeft: "20px" }}></aside>
            <article>
              <h2>О Нас</h2>
              <div className="markeredTekst">
                <span>1</span>
                <ol>
                  Adrenalin Fitness — это ваш надежный партнер в мире фитнеса. Мы предлагаем:
                  <li>Индивидуальные тренировки;</li>
                  <li>Групповые занятия;</li>
                  <li>Консультации по питанию и образу жизни.</li>
                </ol>
              </div>
              <div className="markeredTekst">
                <span>2</span>
                <p>
                  Наша команда профессиональных тренеров всегда готова помочь вам достичь ваших целей.
                </p>
              </div>
              <div className="markeredTekst">
                <span>3</span>
                <p>
                  Мы создаем комфортную атмосферу для занятий спортом, а также предоставляем наушники для
                  прослушивания музыки.
                </p>
              </div>
              <div className="markeredTekst">
                <span>4</span>
                <p>Мы поддерживаем вас на каждом этапе вашего тренировочного процесса.</p>
              </div>
              <div className="markeredTekst">
                <span>5</span>
                <p>После тренировки вы можете обсудить результаты и задать вопросы тренеру.</p>
              </div>
              <div className="markeredTekst">
                <span>6</span>
                <p>Присоединяйтесь к нам и начните свой путь к здоровью и фитнесу!</p>
              </div>
            </article>
            <aside style={{ marginRight: "20px" }}></aside>
          </section>

          <footer>
            <p>© 2025 Адреналин</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
