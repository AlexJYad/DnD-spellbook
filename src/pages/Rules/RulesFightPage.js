import React from "react";

const RulesFightPage = () => {
   return (
      <div className="container rules-fight-page">
         <h1>Базовые правила боя</h1>
         <p>
            В Dungeons & Dragons боевая система представляет собой пошаговый
            процесс, в котором каждый участник принимает свои действия в порядке
            инициативы. Бой продолжается, пока все враги или союзники не будут
            побеждены, либо ситуация не разрешится другим способом.
         </p>
         <p></p>
         <h2>Последовательность боя</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Инициатива</span>: Все участники бросают
               кубик d20, добавляют модификатор Ловкости и определяют порядок
               действий.
            </li>
            <li>
               <span className="bold">Раунд</span>: Бой делится на раунды,
               каждый из которых представляет 6 секунд игрового времени.
            </li>
            <li>
               <span className="bold">Ход</span>: Во время своего хода каждый
               персонаж может выполнить:
               <ul>
                  <li>Одно основное действие</li>
                  <li>Одно бонусное действие (если доступно)</li>
                  <li>
                     Одну реакцию (вне хода, как правило, при определенных
                     условиях)
                  </li>
                  <li>Одно взаимодействие с объектом</li>
               </ul>
            </li>
         </ul>
         <h2>Типы действий</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Основное действие</span>: Включает в себя:
               <ul>
                  <li>Атака</li>
                  <li>Использование заклинания</li>
                  <li>Применение предмета</li>
                  <li>Отступление или укрытие</li>
               </ul>
            </li>
            <li>
               <span className="bold">Бонусное действие</span>: Это действие
               доступно в зависимости от класса персонажа или его способностей
               (например, для воров — "Двойная атака").
            </li>
            <li>
               <span className="bold">Реакция</span>: Реакции выполняются вне
               хода персонажа (например, "Атака по уходящему").
            </li>
            <li>
               <span className="bold">Взаимодействие</span>: За ход персонаж
               может взаимодействовать с объектом, например:
               <ul>
                  <li>Открыть дверь</li>
                  <li>Поднять предмет</li>
                  <li>Перевести рычаг или нажать на кнопку</li>
                  <li>Прочитать надпись</li>
               </ul>
            </li>
         </ul>
         <h2>Атака</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Бросок атаки</span>: Для атаки бросается
               d20 и прибавляется модификатор атаки персонажа (сила или
               ловкость, в зависимости от оружия).
            </li>
            <li>
               <span className="bold">Попадание</span>: Если результат броска
               равен или превышает Класс Доспеха (AC) цели, атака попадает.
            </li>
            <li>
               <span className="bold">Урон</span>: После попадания бросается
               кубик урона оружия и прибавляется модификатор силы или ловкости.
            </li>
         </ul>
         <h2>Дистанция и перемещение</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Скорость</span>: Персонаж может
               переместиться на расстояние, не превышающее его скорость (обычно
               30 футов).
            </li>
            <li>
               <span className="bold">Ближний бой</span>: Атаки возможны, если
               цель находится в пределах досягаемости оружия (обычно 5 футов).
            </li>
            <li>
               <span className="bold">Дальний бой</span>: Для дальних атак
               учитывается диапазон оружия или заклинания, и могут быть штрафы
               за слишком близкую дистанцию.
            </li>
         </ul>
         <h2>Заклинания в бою</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Кастинг</span>: Для применения заклинания
               нужно потратить основное или бонусное действие, в зависимости от
               заклинания.
            </li>
            <li>
               <span className="bold">Спасброски</span>: Некоторые заклинания
               требуют, чтобы цель совершила спасбросок, чтобы избежать их
               воздействия или уменьшить эффект. Например:
               <ul>
                  <li>
                     Заклинания на огонь могут требовать спасбросок по Ловкости.
                  </li>
                  <li>
                     Заклинания, вызывающие яд или усыпление, могут требовать
                     спасбросок по Телосложению.
                  </li>
               </ul>
               Для выполнения спасброска цель бросает d20 и прибавляет
               соответствующий модификатор (например, Ловкости, Телосложения или
               Интеллекта). Если результат броска равен или превышает Сложность
               Спасброска (например, урона заклинания), спасбросок считается
               успешным.
            </li>
            <li>
               <span className="bold">Концентрация</span>: Некоторые заклинания
               требуют концентрации. Если заклинатель получает урон, он должен
               пройти проверку концентрации (бросок d20 + модификатор
               Телосложения).
            </li>
         </ul>
         <h2>Спасброски у персонажей</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Когда применяются спасброски?</span>:
               Спасброски могут быть использованы в ответ на:
               <ul>
                  <li>
                     Заклинания противника, например, "Огненный Шар" или
                     "Гипноз".
                  </li>
                  <li>Эффекты от ловушек, ядов или болезней.</li>
                  <li>
                     Попытки избежать урона от опасных ситуаций, например,
                     падение в пропасть.
                  </li>
               </ul>
            </li>
            <li>
               <span className="bold">Типы спасбросков</span>: Каждый персонаж
               имеет модификаторы для определенных типов спасбросков. Например:
               <ul>
                  <li>Ловкость (защита от ловушек или огненных атак).</li>
                  <li>Телосложение (защита от ядов, болезней и усталости).</li>
                  <li>
                     Мудрость (защита от заклинаний, которые манипулируют
                     разумом).
                  </li>
                  <li>
                     Интеллект (защита от магических атак, влияющих на разум).
                  </li>
                  <li>Харизма (защита от магических манипуляций и чар). </li>
               </ul>
            </li>
         </ul>
         <h2>Реакция и зона поражения</h2>
         <ul className="footnote">
            <li>
               <span className="bold">Отход из зоны поражения</span>: Если вы
               покидаете зону поражения врага (обычно 5 футов вокруг него),
               противник может использовать реакцию, чтобы выполнить атаку по
               уходящему. Чтобы избежать атаки, можно использовать действие
               "Отход" вместо обычного перемещения.
            </li>
            <li>
               <span className="bold">Вход в зону поражения</span>: Вход в зону
               поражения противника не провоцирует атаку. Вы можете подойти
               вплотную к врагу, не опасаясь немедленной атаки.
            </li>
         </ul>
      </div>
   );
};

export default RulesFightPage;