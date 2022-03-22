import mysql from 'mysql2';

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecom'
});

export const getUsers = async () => {
  try {
    const queryString = 'select * from users';
    const data = await connection.promise().query(queryString);
    return data[0];
  }
  catch(err) {
    throw err;
  }
};

export const addUser = async (user) => {
  const {username, password} = user;
  try {
    const queryString = 'insert into users(username, password) values(?, ?)';
    const queryArgs = [username, password];
    const data = await connection.promise().query(queryString, queryArgs);
    return data[0];
  }
  catch(err) {
    throw err;
  }
};

export const getPrints = async () => {
  try {
    const queryString = 'select * from prints';
    const data = await connection.promise().query(queryString);
    return data[0];
  }
  catch(err) {
    throw err;
  }
};

export const getCart = async (email) => {
  try {
    const queryString = 'select * from prints inner join cart on prints.id = cart.print_id and email = ?';
    const queryArgs = [email];
    const data = await connection.promise().query(queryString, queryArgs);
    return data[0];
  }
  catch(err) {
    throw err;
  }
}

export const getCartContent = async (ids) => {
  try {
    const queryString = 'select * from prints where id in ?';
    const queryArgs = [[ids]];
    const data = await connection.promise().query(queryString, queryArgs);
    return data[0];
  }
  catch(err) {
    throw err;
  }
}

export const getPrint = async (id) => {
  try {
    const queryString = 'select * from prints where id = ?';
    const queryArgs = [id];
    const data = await connection.promise().query(queryString, queryArgs);
    return data[0];
  }
  catch(err) {
    throw err;
  }
}

export const getCollection = async (path) => {
  try {
    const queryString = 'select * from prints where path = ?';
    const queryArgs = [path];
    const data = await connection.promise().query(queryString, queryArgs);
    return data[0];
  }
  catch(err) {
    throw err;
  }
}
