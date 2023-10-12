export function Home() {
  const h = {
    text: `<div class="home">
          <div class="text container m_bottom">
            <h4>Information about Qurutob</h4>
            <div>Qurutob (sometimes kurutob) (Tajik: Қурутоб) is a dish of Tajik
            cuisine. Sometimes described as a "bread salad", it is created using
            qurut, dried balls of cheese, which are soaked in water; the resulting
            liquid, salty in flavor, is used as the base of the dish. Strips of
            fatir, a type of flatbread, are then placed on top. The mixture is
            served on large plates, and is usually topped with a variety of
            vegetables, such as onions, cucumbers, tomatoes, or herbs; meat or
            chili peppers are also sometimes seen as garnishes. Qurutob is a
            shared dish, meant to be eaten with the hands.</div>
          </div>
            <div class="work_time container m_bottom">
              <h4>Hours</h4>
              <ul>
              <li>Sunday: 8am - 8pm</li>
              <li>Monday: 6am - 6pm</li>
              <li>Tuesday: 6am - 6pm</li>
              <li>Wednesday: 6am - 6pm</li>
              <li>Thursday: 6am - 10pm</li>
              <li>Friday: 6am - 10pm</li>
              <li>Saturday: 8am - 10pm</li>
              </ul>
              </div>
            <div class="location container">
          <h4>Location</h4>
      
          <div class="loc">Novocherkassk, Engelsa 85A, 209/3</div>
        </div>`,
  };
  const content = document.querySelector(".content1");
  content.innerHTML = h.text;
}
