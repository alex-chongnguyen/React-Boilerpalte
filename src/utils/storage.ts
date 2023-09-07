export class MyStorage {
  private readonly prefix: string;
  private readonly storage: Storage;

  constructor(prefix = 'app') {
    this.prefix = prefix;
    this.storage = window.localStorage;
  }

  /**
   * @description Get auth token
   */
  getToken(): string | null {
    try {
      const token = this.storage.getItem(`${this.prefix}-token`);
      if (!token) {
        return null;
      }
      return JSON.parse(token) as string;
    } catch (e) {
      console.error('Json parse token fail:', e);
      return null;
    }
  }

  setToken(token: string) {
    this.storage.setItem(`${this.prefix}token`, JSON.stringify(token));
  }

  clearToken() {
    this.storage.removeItem(`${this.prefix}token`);
  }
}

export const storage = Object.freeze(new MyStorage());
