import "./nosotros.css"

export default function Nosotros() {
  return (
    <div>
      <h1 className="titulo-nosotros">Nuestro Equipo</h1>


      <section id="equipo">
        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/chef-35582110.jpg" alt="" className="persona-imagen" />
          <div className="persona-info">
            <h2>Alejandro Grimaldi</h2>
            <p>Chef Pizzero</p>
            <div className="social-media">
            <i><ion-icon name="logo-facebook"></ion-icon></i>
              <i><ion-icon name="logo-twitter"></ion-icon></i>
              <i><ion-icon name="logo-instagram"></ion-icon></i>
              <i><ion-icon name="logo-linkedin"></ion-icon></i>
            </div>

          </div>
        </div>

        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/italian-pizza-chef-handlebar-mustache-holding-peel-52029167.jpg" alt="" className="persona-imagen" />
          <div className="persona-info">
            <h2>Antonio Sorrentino </h2>
            <p>Chef</p>
            <div className="social-media">
            <i><ion-icon name="logo-facebook"></ion-icon></i>
              <i><ion-icon name="logo-twitter"></ion-icon></i>
              <i><ion-icon name="logo-instagram"></ion-icon></i>
              <i><ion-icon name="logo-linkedin"></ion-icon></i>
            </div>

          </div>
        </div>

        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/african-female-chef-17871226.jpg" alt="" className="persona-imagen" />
          <div class="persona-info">
            <h2>Isabella Rossi</h2>
            <p>Chef Pizzero</p>
            <div class="social-media">
            <i><ion-icon name="logo-facebook"></ion-icon></i>
              <i><ion-icon name="logo-twitter"></ion-icon></i>
              <i><ion-icon name="logo-instagram"></ion-icon></i>
              <i><ion-icon name="logo-linkedin"></ion-icon></i>
            </div>

          </div>
        </div>

        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/chef-baker-cook-22155470.jpg" alt="" className="persona-imagen" />
          <div className="persona-info">
            <h2>Gina Martini</h2>
            <p>Chef</p>
            <div class="social-media">
              <i><ion-icon name="logo-facebook"></ion-icon></i>
              <i><ion-icon name="logo-twitter"></ion-icon></i>
              <i><ion-icon name="logo-instagram"></ion-icon></i>
              <i><ion-icon name="logo-linkedin"></ion-icon></i>
            </div>

          </div>
        </div>
      </section>
    </div>



  )
}