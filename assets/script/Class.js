class User {
  #id;
  #name;
  #userName;
  #email;

  constructor(id, name, userName, email) {
    this.#id = id;
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get userName() {
    return this.#userName;
  }

  get email() {
    return this.#email;
  }

  getInfo() {
    let idInfo = `Id: ${this.id}`;
    let nameInfo = `Name: ${this.name}`;
    let userNameInfo = `Username: ${this.userName}`;
    let emailInfo = `Email: ${this.email}`;

    return idInfo + '\n' + nameInfo + '\n' + userNameInfo + '\n' + emailInfo;
  }
}

class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;

  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }

  get pages() {
    return this.#pages;
  }

  get groups() {
    return this.#groups;
  }

  get canMonetize() {
    return this.#canMonetize;
  }

  getInfo() {
    let userInfo = super.getInfo();
    let pagesInfo = `Pages: ${this.pages.join(', ')}`;
    let groupsInfo = `Groups: ${this.groups.join(', ')}`;
    let canMonetizeInfo = `Can monetize: ${this.canMonetize}`;

    return (
      userInfo + '\n' + pagesInfo + '\n' + groupsInfo + '\n' + canMonetizeInfo
    );
  }
}

export default User;
export { Subscriber };
