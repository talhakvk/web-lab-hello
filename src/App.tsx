import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import image1 from "./images/image1.avif";
import signinImg from "./images/signin (1).png";
import proje2Img from "./images/proje2.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>HAKKIMDA</h2>
          <figure>
            <img
              src={image1}
              alt="Muhammed Talha Kavak'ın vesikalik fotografi"
            />
            <figcaption>Muhammed Talha Kavak</figcaption>
          </figure>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>CHAT Uygulaması</h3>
            <p>Online şekilde mesajlaşma yaptığımız bir uygulama.</p>
            <p><strong>Kullanılan Teknolojiler:</strong> HTML, CSS, JavaScript,.NET</p>
            <img src={signinImg} alt="Chat projesi ekran görüntüsü" />
          </article>

          <article>
            <h3>Fırat Üniversitesi Chatbot</h3>
            <p>Fırat üniversitesi için hazırladığım chatbot projesi.</p>
            <p><strong>Kullanılan Teknolojiler:</strong> HTML, CSS, JavaScript,Node.js</p>
            <img src={proje2Img} alt="Chatbot ekranı" />
          </article>
        </section>

        <section id="iletisim">
          <h2>ILETISIM</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small
                  id="email-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small
                  id="subject-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small
                  id="message-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>
              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Muhammed Talha Kavak. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
