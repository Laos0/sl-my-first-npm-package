let names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

// my first function
function doesNameMatch(name){

    let matchFound = false;

    names.forEach((curName) => {
        if(name.toLowerCase() === curName.toLowerCase()){
            matchFound = true;
        }
    })

    return matchFound;
}


module.exports = doesNameMatch