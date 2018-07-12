export class Contact {
  constructor (
    public _id: string,
    public name: string,
    public phone: string,
    public email: string
  ) { }
}

export const contactList: Array<Contact> = [
  new Contact("12isdf", "Albert Allen",   "+33 111111111", "a@a.a"),
  new Contact("10298s", "Barbara Bush",   "+33 222222222", "b@b.b"),
  new Contact("999hka", "Carlos Cole",    "+33 333333333", "c@c.c"),
  new Contact("djflsq", "Diane Davidson", "+33 444444444", "d@d.d"),
  new Contact("123456", "Emilio Escobar", "+33 555555555", "e@e.e")
];
