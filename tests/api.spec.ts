import {test,expect,request} from '@playwright/test';
import { AuthClient } from '../apiClient';
import { generateApiData } from '../data_factory/apiData';


test('test auth client get', async ({request}) => {
    const authClient = new AuthClient(request);
    const response = await authClient.get('/posts/1');
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data).toHaveProperty('id', 1); 
})










test('get api test', async ({request}) => {

    const response = await request.get('/posts/1',
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'authorization': 'Bearer your-token-here'
            },
        }
    );
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    console.log(data);
    expect(data).toHaveProperty('id', 1); 

})

test('post api test', async ({request}) => {

    const apiData = await generateApiData();
    const authClient = new AuthClient(request);
    const response = await authClient.post('/posts', { data: apiData });
    

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    console.log(data);
    expect(data).toHaveProperty('title', 'foo'); 
    expect(data).toHaveProperty('body', 'bar'); 
    expect(data).toHaveProperty('userId', 1);   
})

test('GET users', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.get('/users');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});
