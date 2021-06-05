import { axiosGet, axiosPost } from '../libs/http';

function getCategory() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/api/category',
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

function getHotBook() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/api/book/new',
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

function getBooksList(options) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: options.url + 'pageNum=' + options.pageNum + '&pageSize=' + options.pageSize,
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

function getBook(url) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/api' + url,
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

function Register(options) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/api/user/register',
            data: {
                ...options
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

export default {
    getCategory,
    getBooksList,
    getHotBook,
    getBook,
    Register
}