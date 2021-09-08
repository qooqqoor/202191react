export const setToken =  (value)=>localStorage.setItem('token', value)
export const getToken = () => localStorage.getItem("token");
export const removeAll = () => localStorage.clear();
