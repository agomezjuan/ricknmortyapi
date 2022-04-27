import { getData, getMoreCharacters } from "../utils/getData";
const bottom = document.getElementById("bottom");

const Home = async () => {
  const characters = await getData();
  const view = `
        <div class="Characters">
            ${characters.results
              .map(
                (character) => `
                <article class="Characters-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt"${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `
              )
              .join("")}
        </div>
    `;
  return view;
};

const MoreCharacters = async () => {
  let page = document.querySelectorAll(".Characters-item").length / 20 + 1;
  console.log(page);
  const characters = await getMoreCharacters(page);
  console.log(characters);
  const view = `
  ${characters.results
    .map(
      (character) => `
                <article class="Characters-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt"${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `
    )
    .join("")}
    `;

  const chars = document.querySelector(".Characters");
  chars.insertAdjacentHTML("beforeend", view);
};

const options = {
  root: document.querySelector("#Main"),
  rootMargin: "200px",
  threshold: 0,
};

const observer = new IntersectionObserver(MoreCharacters, options);

observer.observe(bottom);

export default Home;
