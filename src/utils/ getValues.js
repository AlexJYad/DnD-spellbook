export function getValues(experience) {
   if (experience >= 0 && experience < 300) {
      return { level: 1, proficiencyname: 2 };
   } else if (experience >= 300 && experience < 900) {
      return { level: 2, proficiencyname: 2 };
   } else if (experience >= 900 && experience < 2700) {
      return { level: 3, proficiencyname: 2 };
   } else if (experience >= 2700 && experience < 6500) {
      return { level: 4, proficiencyname: 2 };
   } else if (experience >= 6500 && experience < 14000) {
      return { level: 5, proficiencyname: 3 };
   } else if (experience >= 14000 && experience < 23000) {
      return { level: 6, proficiencyname: 3 };
   } else if (experience >= 23000 && experience < 34000) {
      return { level: 7, proficiencyname: 3 };
   } else if (experience >= 34000 && experience < 48000) {
      return { level: 8, proficiencyname: 3 };
   } else if (experience >= 48000 && experience < 64000) {
      return { level: 9, proficiencyname: 4 };
   } else if (experience >= 64000 && experience < 85000) {
      return { level: 10, proficiencyname: 4 };
   } else if (experience >= 85000 && experience < 100000) {
      return { level: 11, proficiencyname: 4 };
   } else if (experience >= 100000 && experience < 120000) {
      return { level: 12, proficiencyname: 4 };
   } else if (experience >= 120000 && experience < 140000) {
      return { level: 13, proficiencyname: 5 };
   } else if (experience >= 140000 && experience < 165000) {
      return { level: 14, proficiencyname: 5 };
   } else if (experience >= 165000 && experience < 195000) {
      return { level: 15, proficiencyname: 5 };
   } else if (experience >= 195000 && experience < 225000) {
      return { level: 16, proficiencyname: 5 };
   } else if (experience >= 225000 && experience < 265000) {
      return { level: 17, proficiencyname: 6 };
   } else if (experience >= 265000 && experience < 305000) {
      return { level: 18, proficiencyname: 6 };
   } else if (experience >= 305000 && experience < 355000) {
      return { level: 19, proficiencyname: 6 };
   } else if (experience >= 355000) {
      return { level: 20, proficiencyname: 6 };
   } else {
      return { level: null, proficiencyname: null }; // Возвращаем null для некорректного значения
   }
}
