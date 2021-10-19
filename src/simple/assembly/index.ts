import { logging } from "near-sdk-as";

import { MaleName, maleNames } from "./models/maleNames";
import { FemaleName, femaleNames } from "./models/femaleNames";
import { Genre } from "./models/enums";

export function saveName(
  creatorId: string,
  name: string,
  genre: number
): string {
  if (genre === 0) {
    const maleName = new MaleName(creatorId, name);
    maleNames.push(maleName);
  } else {
    const femaleName = new FemaleName(creatorId, name);
    femaleNames.push(femaleName);
  }
  logging.log(maleNames);
  logging.log(femaleNames);
  return name + " has been saved! by " + creatorId;
}

export function getName(): string {
  const vectorExampleMale = ["Pedro", "Juanito", "Ramiro"];
  const vectorExampleFemale = ["Ana", "Gabriela", "Samantha"];
  let genre = 0;

  let randomInt: number;
  if (genre === 0) {
    randomInt = Math.random() * vectorExampleFemale.length;
    return vectorExampleMale[randomInt as i32];
  } else {
    randomInt = Math.random() * vectorExampleMale.length;
    return vectorExampleFemale[randomInt as i32];
  }
}
