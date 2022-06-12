// high level modules should not depend on low level modules; both should depend on abstractions.
// Any higher classes should always depend upon the abstraction of the class rather than the detail.

// Wrong

http.get('http://api.com/examples', (res)=>{
    this.setState({
        key1: res.val1,
        key2: res.val2
    })
})


// Correct - Loose Coupling
const httpRequest = (url, setState) => {
    http.get(url, (res) => setState.setValues(res))
};

const setState = {
    setValues: (res) => {
        this.setState({
            key1: res.val1,
            key2: res.val2
        })
    }
}

httpRequest('http://api.com/examples', setState)