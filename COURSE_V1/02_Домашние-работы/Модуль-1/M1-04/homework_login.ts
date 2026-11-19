function login(isPasswordCorrect: boolean, isCaptchaPassed: boolean): string {
    return isPasswordCorrect && isCaptchaPassed ? "Success" : "Error"
};

console.log(login(true, true));
console.log(login(false, true));
console.log(login(true, false));
console.log(login(false, false));