import fetch from 'node-fetch';

test('Adding new Admin', ()=>{
    var data;
    var newAdmin = {
        username: 'newAdmin',
        name: 'newadmin123',
        email: 'newadmin@gmail.com',
        password: 'newadmin123'
    }
    fetch('http://localhost:3000/admin/weapons',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: newAdmin
    }
    ).then(res => res.json()).then(d=> data =d);
    expect(data).toBe('Added!')
})