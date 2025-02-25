interface User {
  id: number;
  username: string;
  email: string;
  company: {
    name: string;
  };
}

export default User;
