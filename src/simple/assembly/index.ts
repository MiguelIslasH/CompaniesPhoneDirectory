import { phoneDirectory, Company } from "./models/company";

export function registerCompany(
  creatorId: string,
  name: string,
  phone: string
): string {
  const company = new Company(creatorId, name, phone);
  phoneDirectory.push(company);
  return "Company " + name + " has been registered! by " + creatorId;
}

export function getCompaniesData(): Array<Company> {
  let companies = new Array<Company>(phoneDirectory.length);
  for (let i = 0; i < phoneDirectory.length; i++) {
    let company = phoneDirectory[i];
    companies[i] = company;
  }
  return companies;
}

export function getCompany(name: string): Company {
  for (let i = 0; i < phoneDirectory.length; i++) {
    let company = phoneDirectory[i];
    if (company.name == name) {
      return company;
    }
  }
  return new Company("", "", "");
}
