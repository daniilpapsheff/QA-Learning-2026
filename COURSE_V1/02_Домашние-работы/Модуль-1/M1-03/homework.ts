function checkPasswordLength(password: string): boolean {
    return (password.length >= 8 && password.length <= 20) ? true : false
}
console.log(`Пароль из 7 символов "${checkPasswordLength("k9#mP2x")}" ожидаемы результат false`)
console.log(`Пароль из 8 символов "${checkPasswordLength("R4$vL8nQ")}" ожидаемы результат true`)
console.log(`Пароль из 19 символов "${checkPasswordLength("gT7@wE2!zX9#cV5&bN1")}" ожидаемы результат true`)
console.log(`Пароль из 20 символов "${checkPasswordLength("M3*pK8^jH4%fD6$sA1!q")}" ожидаемы результат true`)
console.log(`Пароль из 21 символов "${checkPasswordLength("Z9!xC4@vB7#nM2$lK5%jH")}" ожидаемы результат false`)