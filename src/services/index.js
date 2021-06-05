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

function getCategoryContent(options) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/api/book' + options.fullPath + '/page?pageNum=' + options.pageNum + '&pageSize=' + options.pageSize,
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}

function getBooks() {
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
    getCategoryContent,
    getBooks
}