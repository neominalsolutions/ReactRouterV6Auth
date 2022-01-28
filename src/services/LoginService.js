

export const login = async (param) => {

    const response = await fetch('https://reqres.in/api/login', {
        method: 'post',
        body: JSON.stringify(param),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await response.json();

    return data;

}



