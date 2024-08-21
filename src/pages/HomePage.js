import Nav from "../components/Nav";
import imageAdtUrl from "../img/announcement.png";

const text =
   "Добро пожаловать на континент.<br>Сегодня вы присоединяетесь к виликому путешествию,<br>что изменит этот мир навсегда!";

const adt = (
   <a href={imageAdtUrl} target="_blank" rel="noopener noreferrer">
      Анонс
   </a>
);

const about = (
   <a href={"/about"} rel="noopener noreferrer">
      Лор
   </a>
);

const url = [adt, about];

export default function HomePage() {
   return <Nav title={"Welcome"} description={text} url={url} />;
}
