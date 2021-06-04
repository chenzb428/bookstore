import axios from 'axios';

function axiosGet(options) {
    axios(options.url)
        .then((res) => {
            options.success(res);
        })
        .catch((err) => {
            options.error(err);
        });
}

function axiosPost(options) {
    axios({
        url: options.url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        data: {
            ...options.data
        }
    })
    .then((res) => {
        options.success(res);
    })
    .catch((err) => {
        options.error(err);
    });
}

export {
    axiosGet,
    axiosPost
}