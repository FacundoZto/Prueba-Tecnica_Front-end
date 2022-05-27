export const validate = (input) => {
    let error = '';

    if(input.toLowerCase() === "iseijasunow") {
        error = 'Can not search this word'
    }
    if(input.length < 4 || !input){
        error = 'Must be longer'
    }

    return error;
}