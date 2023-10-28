// 写入cookie
// 设置cookie
const setCookie = (name, value, { domain, path, maxAge, secure } = {}) => {
  // encodeURIComponent()函数可把字符串作为URI组件进行编码
  // 该函数不会对ASCII字母和数字进行编码，也不会对这些ASCII标点符号进行编码
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  // max-age: 以秒为单位，表示 cookie 有效期，即 cookie 会在 max-age 秒后自动删除。
  if (typeof maxAge === "number") {
    cookieString += `;max-age=${maxAge}`;
  }
  // domain: 指定 cookie 生效的域名。默认情况下，cookie 仅在当前域名下有效。
  if (domain) {
    cookieString += `;domain=${domain}`;
  }
  // path: 指定 cookie 生效的路径。默认情况下，cookie 仅在当前路径下有效。
  if (path) {
    cookieString += `;path=${path}`;
  }
  // secure: 一个布尔值，表示 cookie 是否通过安全的 HTTPS 连接传输。默认情况下，cookie 通过 HTTP 传输。
  if (secure) {
    cookieString += `;secure=${secure}`;
  }
  // document.cookie 属性可以设置和获取 cookie。
  document.cookie = cookieString;
};

// 读取 cookie
// 通过name,读取cookie
const getCookie = (name) => {
  // 将name进行编码
  name = encodeURIComponent(name);
  // 读取cookie,转换成数组
  const cookieArray = document.cookie.split(";");
  // 遍历数组
  for (const item of cookieArray) {
    const [cookieName, cookieValue] = item.split("=");
    if (cookieName === name) {
      // 将cookieValue进行解码，并返回
      return decodeURIComponent(cookieValue);
    }
  }
  return;
};

// 删除 cookie
const removeCookie = (name, { domain, path } = {}) => {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, "", { domain, path, maxAge: -1 });
};
