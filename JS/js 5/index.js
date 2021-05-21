function createNewUser() {
    let firstName = prompt("Введите имя")
    let lastName = prompt("Введите фамилию")
    let birthday = prompt("Введите дату рождения в формате dd.mm.yyyy")
    let birthday_parts = new Date(+birthday.split('.')[2], birthday.split('.')[1] - 1, +birthday.split('.')[0])

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday_parts,
        age: function getAge() {
            let ageDiMs = Date.now() - this.birthday.getTime()
            let ageDate = new Date(ageDiMs)
            return Math.abs(ageDate.getUTCFullYear() - 1970)
        },
        password: function getPassword() {
            return firstName[0].toUpperCase() + lastName.toLowerCase() + birthday_parts.getFullYear()
        },
        login: function getLogin() {
            return firstName[0].toLowerCase() + lastName.toLowerCase()
        }
    };

    return newUser
}

let user = createNewUser()
console.log(user.age())
console.log(user.password())