//arrow
const getUser = (resolve, reject) => {
    //biz logic
    let fakeUser = {
        id: 1,
        name: 'admin'
    };
    //let fakeUser=null ; to test rejectionl̥
    let error = {
        code: 500,
        message: 'User not found!!'
    }
    //
    if (fakeUser) {
        setTimeout(resolve, 100, fakeUser);
    } else
        setTimeout(reject, 100, error);

};

//another api
const login = (user, resolve, reject) => {
    let error = {
        code: 500,
        message: 'Login failed'
    };
    let status = 'Login Success'
    if (user.name === 'admin') {
        setTimeout(resolve, 100, status);
    } else
        setTimeout(reject, 100, error);
}

let showPage = (status, resolve, reject) => {

    let page = '';
    if (status === 'Login Success') {
        page = 'Admin Page'
        setTimeout(resolve, 100, page);
    } else {
        page = 'Guest Page';
        setTimeout(reject, 100, page);
    }

}

getUser(user => {
    console.log('Get user is called')
    //nested callback
    login(user, status => {
        console.log('login is called')
        showPage(status, apage => {
            console.log(apage)
        }, gpage => {
            console.log(gpage);
        });
    }, err => {
        console.log(err)
    });
}, error => {
    console.log(error);
});

