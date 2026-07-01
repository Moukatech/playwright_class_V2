import {request} from '@playwright/test'

export class AuthClient {
  constructor(private request:any) {}

    get(url: string, token?: string) {
    return this.request.get(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
  }

    post(url: string, body?: any, token?: string) {
    return this.request.post(url, {
      data: body,
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
  }


}