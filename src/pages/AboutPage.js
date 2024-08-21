import Nav from "../components/Nav";

const text = "Всё что вы хотледи знать но боялись спросить";

const url = [];

url.push(
   <a href={"/rules"} rel="noopener noreferrer">
      Правила
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Карта мира
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Города
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Персонажи
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Магия
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Религия
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Экономика
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Караваны
   </a>
);

export default function AboutPage() {
   return <Nav title={"Лор Мира"} description={text} url={url} />;
}
