import { RowDataPacket } from 'mysql2'

// Define a custom type for the results of a SELECT query
export type SelectResult<T> = T[]

// Define a custom type for the results of an INSERT query
export type InsertResult = { affectedRows: number; insertId: number }

// Define a custom type for the results of an UPDATE or DELETE query
export type UpdateResult = { affectedRows: number; changedRows: number }

// Extend the original QueryFunction type with custom types
export type QueryFunction<T> = (sql: string, values?: any[]) => Promise<T>

// Extend the Connection interface with a custom query function
declare module 'mysql2' {
  interface Connection {
    queryAsync: QueryFunction<unknown>
  }
}
