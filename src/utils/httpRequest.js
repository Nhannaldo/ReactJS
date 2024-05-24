import axios from 'axios';
// console.log(process.env);
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;

// Local / development: môi trường dev
// Test / Staging : môi trường trước khi deloy
// UAT : chạy với code mới và dữ liệu bên môi trường Production
// Production : môi trường đưa đến người dùng cuối là khách hàng
