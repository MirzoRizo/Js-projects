import { Home } from "./home";
import { menu } from "./menu";
import { Contact } from "./contacts";
import "./style.css";

const homeBtn = document.querySelector(".h_home");
homeBtn.addEventListener("click", () => {
  content1.classList.remove("hiden");
  content2.classList.add("hiden");
  content3.classList.add("hiden");
});
const menuBtn = document.querySelector(".h_menu");
menuBtn.addEventListener("click", () => {
  menu();
  content1.classList.add("hiden");
  content2.classList.remove("hiden");
  content3.classList.add("hiden");
});
const conBtn = document.querySelector(".h_contacts");
conBtn.addEventListener("click", () => {
  Contact();
  content1.classList.add("hiden");
  content2.classList.add("hiden");
  content3.classList.remove("hiden");
});

const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
Home();
