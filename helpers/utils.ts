

export class RandomHelper {

    static getCurrentDate() {

        return new Date()
            .toISOString()
            .split('T')[0];
    }

    static generateEmail() {

        return `user${Date.now()}@test.com`;
    }

    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class DataStore {
  private store: Record<string, any> = {};

  set(key: string, value: any) {
    this.store[key] = value;
  }

  get(key: string) {
    return this.store[key];
  }
}

export const dataStore = new DataStore();
