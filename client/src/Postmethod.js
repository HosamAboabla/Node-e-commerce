async function Postmethod(url,data) {

    let response = await fetch(url,
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    var err = true
    if (response.ok){
        err = false;
    }
    let resJson = await response.json();
    var mess = resJson.Message;      
    return {err, mess}

}

export default Postmethod ;
    // fetch(url,
    // {
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then((response) => {
    // if (response.status < 500) {
    //     return response.json();
    // }
    
    // })
    // .then((responseJson) => {
    //     mess =responseJson.message;
    //     console.log(`from postmethod ${mess}`)

    // })
    // .catch((erro) => {
    //     err = erro.message;
    // })