import { PersistentVector } from "near-sdk-as";

export class MaleName {
  creatorId: string;
  name: string;

  constructor(creatorId: string, name: string) {
    this.creatorId = creatorId;
    this.name = name;
  }
}

export const maleNames = new PersistentVector<MaleName>("m");
