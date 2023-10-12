export function menu() {
  const m = {
    text: `<div class="q1 container m_bottom">
        <img src="/src/1.png" alt="Qurutob" />
        <div>
          <h4>Qurutob without Meel</h4>
          <div class="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            expedita explicabo illum dolorem tenetur atque at error, laborum
            ipsa illo. Nesciunt distinctio molestiae assumenda eius quo mollitia
            ducimus corporis eaque. Ipsam eos doloremque tempore facere earum
            ipsa cum? Eveniet id, ratione voluptatibus blanditiis laborum,
            nesciunt quam soluta est quod sapiente possimus! Assumenda sint
            optio nulla adipisci dolorem, vel ea nam. Adipisci minus ea cum
            quibusdam!
          </div>
        </div>
      </div>
      <div class="q2 container">
        <img src="/src/4.jpg" alt="qurut" />
        <div>
          <h4>Qurutob with Meel</h4>
          <div class="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            expedita explicabo illum dolorem tenetur atque at error, laborum
            ipsa illo. Nesciunt distinctio molestiae assumenda eius quo mollitia
            ducimus corporis eaque. Ipsam eos doloremque tempore facere earum
            ipsa cum? Eveniet id, ratione voluptatibus blanditiis laborum,
            nesciunt quam soluta est quod sapiente possimus! Assumenda sint
            optio nulla adipisci dolorem, vel ea nam. Adipisci minus ea cum
            quibusdam! 
          </div>
        </div>
      </div>`,
  };
  const content = document.querySelector(".content2");
  content.innerHTML = m.text;
}
