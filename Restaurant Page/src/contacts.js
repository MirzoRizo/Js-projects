export function Contact() {
  const c = {
    text: `<div class="contacts container">
  +79515080047
  +79504723123
  </div>`,
  };
  const content = document.querySelector(".content3");
  content.innerHTML = c.text;
}
