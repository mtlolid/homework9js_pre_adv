let usersArr = [];
let render = () => {
    document.querySelector('.table__table').innerHTML = `<td colspan="6" class="table__line"></td>
        <tr class="table__header"> 
            <td>#</td>
            <td>Login</td>
            <td>Password</td>
            <td>Email</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
        <td colspan="6" class="table__line"></td>`;
    for (let i = 0; i < usersArr.length; i++) {
        let { login, password, email } = usersArr[i];
        document.querySelector('.table__table').innerHTML +=
            `<tr class="table__main">
        <td class = 'id'>${i + 1}</td>
        <td>${login}</td>
        <td>${password}</td>
        <td>${email}</td>
        <td><button type="button" class="table__main__edit" onclick="editUser()" value = "${i}">Edit</button></td>
        <td><button type="button" class="table__main__delete" onclick="deleteUser()" value = "${i}">Delete</button></td>
        </tr>
        <td colspan="6" class="table__line"></td>`;
    }
    ;
};
let addUser = () => {
    const form = document.forms[0];
    const check = [false, false, false];
    const regLogin = /^[A-Za-z]{4,16}$/;
    const regPass = /^[\w\_\-\.]{4,16}$/;
    const regEmail = /^\S*@\S*$/;
    regLogin.test(form.login.value) ? check[0] = true : false;
    regPass.test(form.password.value) ? check[1] = true : false;
    regEmail.test(form.email.value) ? check[2] = true : false;
    if (check.every(elem => elem == true)) {
        let obj = {
            login: form.login.value,
            password: form.password.value,
            email: form.email.value
        };
        usersArr.push(obj);
        form.login.value = '';
        form.password.value = '';
        form.email.value = '';
        render();
    }
    ;
};
let deleteUser = () => {
    const element = event.currentTarget;
    const value = element.value;
    usersArr.splice(value, 1);
    render();
};
let userIndex;
let editUser = () => {
    const element = event.currentTarget;
    const value = element.value;
    let { login, password, email } = usersArr[value];
    const form = document.forms[0];
    userIndex = value;
    form.login.value = login;
    form.password.value = password;
    form.email.value = email;
    form.add.classList.add('hide');
    form.edit.classList.remove('hide');
};
let saveEditUser = () => {
    const form = document.forms[0];
    const check = [false, false, false];
    const regLogin = /^[A-Za-z]{4,16}$/;
    const regPass = /^[\w\_\-\.]{4,16}$/;
    const regEmail = /^\S*@\S*$/;
    regLogin.test(form.login.value) ? check[0] = true : false;
    regPass.test(form.password.value) ? check[1] = true : false;
    regEmail.test(form.email.value) ? check[2] = true : false;
    if (check.every(elem => elem == true)) {
        let obj = {
            login: form.login.value,
            password: form.password.value,
            email: form.email.value
        };
        usersArr[userIndex] = obj;
        form.login.value = '';
        form.password.value = '';
        form.email.value = '';
        render();
        form.add.classList.remove('hide');
        form.edit.classList.add('hide');
    }
    ;
};
