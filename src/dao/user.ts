import { db } from '../db/index';
import { users } from '../db/schema';
import { eq,and } from 'drizzle-orm';

// 用户相关操作
export const userDao = {
  // login
  login: async (username: string, password: string) => {
    try {
      const results = await db.select().from(users).where(and(eq(users.username, username), eq(users.password, password)));
      if (!results || results.length === 0) return null;
      const { password: _, ...userWithoutPassword } = results[0];
      return userWithoutPassword;
    } catch (error) {
      // 打印具体的错误信息
      console.error('Error during login:', error);
      throw error;
    }
 
  },

  register: async (username: string, password: string, email: string) => {
    const results = await db.insert(users).values({
      username,
      password,
      email
    }).returning();
    if (!results || results.length === 0) return null;
    const { password: _,...userWithoutPassword } = results[0];
    return userWithoutPassword;
  }
};