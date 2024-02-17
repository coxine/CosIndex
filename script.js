
const redirect = () => {
    // 获取当前网站的域名
    let domain = window.location.hostname;
    // 获取当前网址的 xxx 部分
    let xxx = window.location.pathname.split("/").pop();
    // 判断 xxx 是否为空
    if (xxx) {
        // 如果不为空，跳转到新网址
        window.location.href = `https://go.${domain}/${xxx}`;
    } else {
        // 如果为空，不做任何操作
        console.log("No redirection needed.");
    }
};
