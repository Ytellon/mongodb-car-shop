export interface IService<T> {
  create: (entity: unknown) => Promise<T>;
  read: () => Promise<T[]>;
  readOne: (id: string) => Promise<T | null>;
  update: (id: string, entity: unknown) => Promise<T | null>;
}