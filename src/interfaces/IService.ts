export interface IService<T> {
  create: (entity: unknown) => Promise<T>;
}