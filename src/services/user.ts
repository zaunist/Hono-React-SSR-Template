import * as dao from '../dao'


export const login = async (username: string, password: string) => {
  const user = await dao.userDao.login(username, password);
  if (!user) return null;
  return user;
}

export const register = async (username: string, password: string, email: string) => {
  const user = await dao.userDao.register(username, password, email);
  if (!user) return null;
  return user;
}