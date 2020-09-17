//arrow
const getUser = () => {
    //biz logic
    let fakeUser = {
        id: 1,
        name: 'admin'
    };
    //let fakeUser=null ; to test rejection
    let error = {
        code: 500,
        message: 'User not found!!'
    }
    //
    return new Promise((resolve, reject) => {
        let user = {
            id: 2,
            name: 'admin'
        };
        if (user) {
            setTimeout(resolve, 2000, user);
        } else {
            setTimeout(reject, 100, { id: 400, message: 'something went wrong' })
        }
    })

};
//another api
const login = user => {
    let error = {
        code: 500,
        message: 'Login failed'
    };
    let status = 'Login Success'
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 100, status);
        } else
            setTimeout(reject, 100, error);
    });

}

let showPage = status => {

    return new Promise((resolve, reject) => {
        let page = '';
        if (status === 'Login Success') {
            page = 'Admin Page'
            setTimeout(resolve, 100, page);
        } else {
            page = 'Guest Page';
            setTimeout(reject, 100, page);
        }
    });


}

const { log } = console;
getUser()
    .then(user => {
        return login(user);
    })
    .then(status => {
        console.log(status)
    })
    .catch(log)
    .finally(() => console.log('login done'))

getUser()
    .then(user => login(user))
    .then(status => console.log(status))
    .catch(log)
    .finally(() => console.log('login done'))

getUser()
    .then(login)
    .then(log)
    .catch(log)
    .finally(() => console.log('login done'))


// getUser(user => {
//     console.log('Get user is called')
//     //nested callback
//     login(user, status => {
//         console.log('login is called')
//         showPage(status, apage => {
//             console.log(apage)
//         }, gpage => {
//             console.log(gpage);
//         });
//     }, err => {
//         console.log(err)
//     });
// }, error => {
//     console.log(error);
// });

