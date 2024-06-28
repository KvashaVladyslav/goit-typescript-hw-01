type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
    return {...initialValues }
}

let test = createOrUpdateUser({ 
  email: 'test@mail.com', 
  password: 'test' 
})

console.log(test);

test.email = "test2@mail.com"
test.surname = "bob"
console.log(test);
test.name = "jack"
console.log(test);
test.surname = "bridge"
test.name = "taylor"
console.log(test);