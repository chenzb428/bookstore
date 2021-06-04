import { axiosGet, axiosPost } from '../libs/http';

function getCategory() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: 'api/category',
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
            url: 'api/book/new',
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
    getBooks
}