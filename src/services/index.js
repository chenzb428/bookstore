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

export default {
    getCategory,
    getBooksList,
    getHotBook
}