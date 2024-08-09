export default interface User {
  username: string;
}

export default interface Book {
  title: string;
  author: string;
  genre: string;
  User?: User;
}