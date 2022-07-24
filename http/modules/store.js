import request from '../request';
// 需要nginx配置，解决本地dist文件访问请求跨域问题

// 苹果榜单查询接口（最受欢迎）
export function topfreeapplications(limit) {
  return request({
    url: `/api/rss/topfreeapplications/limit=${limit}/json`,
    method: `get`
  });
}

// 苹果畅销排行接口（下载次数多）
export function topgrossingapplications(limit) {

  return request({
    url: `/api/rss/topgrossingapplications/limit=${limit}/json`,
    method: `get`
  });
}

// 查找app
export function lookup(params) {
  return request({
    url: `/api/lookup`,
    method: `get`,
    params
  });
}