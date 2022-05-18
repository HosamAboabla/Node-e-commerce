async function Putmethod(url,data) {

    let response = await fetch(url,
    {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
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

    
export default Putmethod;
