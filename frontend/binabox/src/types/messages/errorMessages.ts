// Ошибки для валидации пользовательского ввода
export const errorMessages = {
    emptyEmail: 'Введите адрес электронной почты или номер телефона.',
    invalidEmail: 'Введен некорректный адрес электронной почты.',
    emptyNickname: 'Введите никнейм.',
    invalidNickname: 'Проверьте правильность своего никнейма.',
    passwordLength: 'Пароль должен содержать от 8 до 12 символов.',
    passwordUpperCase: 'Пароль должен включать в себя заглавные буквы.',
    passwordLowerCase: 'Пароль должен включать в себя строчные буквы.',
    passwordDigits: 'Пароль должен включать в себя цифры',
    passwordSpecialChars: 'Пароль должен включать в себя специальные символы: !@#$%.',
    passwordConfirm: 'Пароли должны совпадать.'
}