// Tipando objetos

interface User {
  name: string;
  age?: number;
}

interface Teste {
  [key: string]: User; // campos dinâmicos
}

interface showUserReturn {
  age: number;
  city: string;
}

function showUser(user: User): showUserReturn {
  console.log(user.name);
  console.log(user.age);

  return { age: 22, city: "Fortaleza" };
}

const result = showUser({ name: "PEdro", age: 16 });
