export const fetchUser=()=>{
    const userInfo=localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")): localStorage.clear();
    return userInfo;
}
export const fetchCart=()=>{
    const cartInfo = localStorage.getItem("cartInfo");

    if (cartInfo && cartInfo !== "undefined") {
        // Parse and return the cart info if valid
        return JSON.parse(cartInfo);
    } else {
        // Remove invalid cartInfo if present and return an empty array
        localStorage.removeItem("cartInfo");
        return [];
    }
}