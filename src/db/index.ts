import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema'; // 假设您的 schema 文件位于 ./schema.ts

// 用于存储单例的 db 实例
let dbInstance: NodePgDatabase<typeof schema>;

/**
 * 初始化数据库连接。
 * 采用单例模式，如果已初始化，则直接返回现有实例。
 * @param databaseUrl - 数据库连接字符串。
 * @returns Drizzle 数据库实例。
 */
export function initDb(databaseUrl?: string): NodePgDatabase<typeof schema> {
  if (dbInstance) {
    return dbInstance;
  }

  let connectionStringToUse = databaseUrl;

  if (!connectionStringToUse) {
    console.warn("DATABASE_URL not provided to initDb. Falling back to default development URL.");
    connectionStringToUse = 'postgresql://postgres:123456@localhost:5432/digestai';
  }

  console.log("Initializing database with URL: ", connectionStringToUse);

  const pool = new Pool({
    connectionString: connectionStringToUse,
  });

  // 使用 schema 初始化 drizzle 实例以获得更好的类型支持
  dbInstance = drizzle(pool, { schema });
  return dbInstance;
}

export const db = initDb();