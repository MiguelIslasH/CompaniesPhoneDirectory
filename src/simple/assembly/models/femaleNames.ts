import { PersistentVector } from "near-sdk-as";

export class FemaleName {
  creatorId: string;
  name: string;

  constructor(creatorId: string, name: string) {
    this.creatorId = creatorId;
    this.name = name;
  }
}

export const femaleNames = new PersistentVector<FemaleName>("f");
