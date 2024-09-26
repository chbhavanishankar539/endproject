import React from 'react'
import is1 from '../src/asscets/is1.png'
function Start() {
  return (
    <div>
        <div class="background">
    <nav>
        <div class="nav__logo">
          <img class="img-logo" src={is1} alt="Netflix Logo"/>
          <h5>Travel with Us</h5></div>
        <ul class="nav__links">
          <li class="link"><a href="#home">Home</a></li>
          <li class="link"><a href="#blog">Blog</a></li>
          <li class="link"><a href="#experience">Experience</a></li>
          <li class="link"><a href="#services">Services</a></li>
          <li class="link"><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <header>
        <div class="head1">
          <div class="head2">
            <h2>"Travel Made Easy, With Us"</h2>
          </div>
          <div class="head3">
            <p>Build, personalize, and optimize your itineraries with our free AI trip planner. <br/>Designed for vacations, workations, and everyday <br/>adventures.</p>
          </div>
          <div class="button1">
            <button class="button" ><a href="Login.html">Get started </a></button>
          </div>
        </div>
      </header>
  </div>
<hr/>
    <section class="journey__container" id="blog">
      <div class="section__container">
        <h2 class="section__title">Start Your Journey</h2>
        <p class="section__subtitle">The most searched countries in March</p>
        <div class="journey__grid">
          <div class="country__card">
            <img src="https://i0.wp.com/theboutiqueadventurer.com/wp-content/uploads/2021/01/santorini-sunset-with-windmill.jpg?resize=768%2C512&ssl=1" alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Santorini, Greece</span>
            </div>
          </div>
          <div class="country__card">
            <img src="https://www.incinqueterre.com/images/city_vernazza_big_1.jpg" alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Vernazza, Italy</span>
            </div>
          </div>
          <div class="country__card">
            <img src="https://www.attractionsofamerica.com/images/all_destinations/20211217075611_golden-gate-bridge-san-francisco-attractions.jpg" alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>San Francisco</span>
            </div>
          </div>
          <div class="country__card">
            <img src="https://cdn.pixabay.com/photo/2017/12/04/14/37/zakynthos-2997092_640.jpg" alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>navagio, Greece</span>
            </div>
          </div>
          <div class="country__card">
            <img src="https://www.trawell.in/blog/wp-content/uploads/2022/10/Railay_Beach_Main.jpg" alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Ao Nang, Thailand</span>
            </div>
          </div>
          <div class="country__card">
            <img src="https://theworldtravelguy.com/wp-content/uploads/2022/09/DJI_0956.jpg" alt="country" />
            <div class="country__name">
              <i class="ri-map-pin-2-fill"></i>
              <span>Phi Phi Island, Thailand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
<hr/>
<section id="experience">
  <div class="full">
    <div class="row">
      <div class="column">
        <h2>Get Inspired by Others' Journeys</h2>
    <p>Extract valuable travel insights from Instagram reels and <br/>TikToks, explore the mentioned sights, and effortlessly include <br/>them in your own adventure with Trip Planner AI.</p>
      </div>
    <img src="exp1.jpg" alt="experience" class="image"/>
    </div>
  </div>
</section>
<hr/>
    <section class="display__container" id="services">
      <div class="section__container">
        <h2 class="section__title">Why Choose Us</h2>
        <p class="section__subtitle">
          The gladdest moment in human life, is a departure into unknown lands.
        </p>
        <div class="display__grid">
          <div class="display__card grid-1">
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/elegant-woman-sitting-on-the-shore-and-enjoying-sunset-free-photo.jpg?w=2210&quality=70.jpg" alt="grid" />
          </div>
          <div class="display__card">
            <i class="ri-earth-line"></i>
            <h4>Passionate Travel</h4>
            <p>Fuel your passion for adventure and discover new horizons</p>
          </div>
          <div class="display__card">
            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_87303969.jpg?crop=0%2C208%2C4000%2C2250&wid=800&hei=450&scl=5.0" alt="grid" />
          </div>
          <div class="display__card">
            <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88" alt="grid" />
          </div>
          <div class="display__card">
            <i class="ri-road-map-line"></i>
            <h4>Beautiful Places</h4>
            <p>Uncover the world's most breathtakingly beautiful places</p>
          </div>
        </div>
      </div>
    </section>
<hr/>
    <footer>
      <div class="section__container" id="contacts">
        <h4>Travel with Us</h4>
        <div class="social__icons">
          <span><i class="ri-facebook-fill"></i></span>
          <span><i class="ri-twitter-fill"></i></span>
          <span><i class="ri-instagram-line"></i></span>
          <span><i class="ri-linkedin-fill"></i></span>
        </div>
        <p>
          Travel makes one modest. You see what a tiny place you occupy in the
          world.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Start