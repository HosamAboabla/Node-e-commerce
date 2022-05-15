const Postmethod = (url , data) => {
    fetch(url,
        {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    .then(() => {console.log('added')})
}

export default Postmethod;