import Nav from "../components/Nav";

const text = "Всё что вы хотледи знать но боялись спросить";

const url = [];

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Основные
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Магия
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      Хронология
   </a>
);

url.push(
   <a href={"*"} rel="noopener noreferrer">
      D&D
   </a>
);

export default function RulesPage() {
   return <Nav title={"Правила"} description={text} url={url} />;
}
