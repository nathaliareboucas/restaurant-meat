export class User {
  constructor(public email: string,
              public name: string,
              private password: string) {}

  matches(another: User): boolean {
      return another !== undefined &&
          another.email === this.email &&
          another.password === this.password;
  }
}

export const users: {[key: string]: User} = {
  'maria@gmail.com': new User('maria@gmail.com', 'Maria', 'maria123'),
  'joao@gmail.com': new User('joao@gmail.com', 'João', 'joao456')
}
