
export const ValidateEmail = (data) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    for (const email in data) {
        if(!regex.test(data[email])) return false;
    }
    return true;
}