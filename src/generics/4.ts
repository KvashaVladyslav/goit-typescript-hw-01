type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
    return {...initialValues }
}

console.log(createOrUpdateUser({ 
  email: 'test@mail.com', 
  password: 'test' 
})); 
