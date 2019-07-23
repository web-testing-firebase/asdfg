export class Company {

  public id: number;
  public co_name: string;
  public co_profile: string;
  public co_address: string;
  public co_email: string;
  constructor(id: number, co_name: string, co_profile: string, co_address: string, co_email: string) {
    this.id = id;
    this.co_name = co_name;
    this.co_profile = co_profile;
    this.co_address = co_address;
    this.co_email = co_email;
  }
}