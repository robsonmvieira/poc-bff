export interface ICache {
  get<T>(key: string): Promise<T>
  set(key: string, value: any, ttl?: number): Promise<void>
}
