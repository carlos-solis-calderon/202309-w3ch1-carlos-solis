import { King } from "./king";

class Character {
name: string,
family: string,
age: number,
serie = "Game of thrones";

constructor(characterName: string, characterFamily: string, characterAge: number) {
  this.name = characterName;
  this.family = characterFamily;
  this.age = characterAge;
}
phrase(value:string) => {
  return value;
}
Dead() => {
  this.status = false;

}
}
