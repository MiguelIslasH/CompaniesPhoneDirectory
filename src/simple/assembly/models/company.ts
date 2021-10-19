import { PersistentVector } from "near-sdk-as";

@nearBindgen
export class Company {
  creatorId: string;
  name: string;
  phone: string;

  constructor(creatorId: string, name: string, phone: string) {
    this.creatorId = creatorId;
    this.name = name;
    this.phone = phone;
  }
}

export const phoneDirectory = new PersistentVector<Company>("c");
