export const inputValue = (value) => {
    console.log(value);
    return {
        type: 'INPUT_VALUE',
        payload: value
    }
}
