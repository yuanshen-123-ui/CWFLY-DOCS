import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CWFLY',
  description: 'CW 模拟飞行连飞平台 — 官方文档',
  lang: 'zh-CN',

  appearance: false,

  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }],
    ['script', {}, `
(function() {
  var CONSENT_COOKIE = 'cwfly_cookie_consent';
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/';
  }
  if (getCookie(CONSENT_COOKIE)) return;
  var style = document.createElement('style');
  style.textContent = [
    '#cwfly-cookie-banner{position:fixed;bottom:0;left:0;right:0;z-index:999999;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-top:1px solid rgba(0,0,0,0.08);padding:16px 24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;font-size:14px;color:#1d1d1f;box-shadow:0 -2px 20px rgba(0,0,0,0.08)}',
    '#cwfly-cookie-banner p{margin:0;max-width:600px;line-height:1.5}',
    '#cwfly-cookie-banner a{color:#0071e3;text-decoration:none}',
    '#cwfly-cookie-banner a:hover{text-decoration:underline}',
    '#cwfly-cookie-btn{background:#0071e3;color:#fff;border:none;border-radius:20px;padding:8px 24px;font-size:14px;cursor:pointer;white-space:nowrap;transition:background 0.2s}',
    '#cwfly-cookie-btn:hover{background:#0077ed}'
  ].join('');
  document.head.appendChild(style);
  var banner = document.createElement('div');
  banner.id = 'cwfly-cookie-banner';
  banner.innerHTML = '<p>本站使用 Cookie 以提升您的浏览体验。继续使用本网站即表示您同意我们的 <a href="/general/cookie">Cookie 政策</a>。</p><button id="cwfly-cookie-btn">知道了</button>';
  function showBanner() { document.body.appendChild(banner); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
  document.addEventListener('click', function(e) {
    if (e.target.id === 'cwfly-cookie-btn') {
      setCookie(CONSENT_COOKIE, '1', 365);
      var b = document.getElementById('cwfly-cookie-banner');
      if (b) b.remove();
    }
  });
})();
    `],
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '总则', link: '/general/' },
      { text: '使用指南', link: '/guide/' },
      { text: '管制员培训', link: '/ctd/' },
      { text: '飞行员指南', link: '/ptd/' },

      { text: 'SOP', link: '/ctd/sop' },
    ],

    sidebar: {
      '/general/': [
        {
          text: '总则',
          items: [
            { text: '平台简介', link: '/general/' },
            { text: '平台规则', link: '/general/rules' },
            { text: '行为准则', link: '/general/code-of-conduct' },
            { text: '账号管理', link: '/general/account' },
            { text: '隐私政策', link: '/general/privacy' },
            { text: 'Cookie 政策', link: '/general/cookie' },
          ],
        },
      ],
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '注册与登录', link: '/guide/register' },
            { text: '飞行计划', link: '/guide/flight-plan' },
            { text: '连飞活动', link: '/guide/events' },
            { text: '在线地图', link: '/guide/map' },
            { text: '航图查询', link: '/guide/charts' },
            { text: '气象报文', link: '/guide/weather' },
            { text: '客户端连接', link: '/guide/fsd-connect' },
          ],
        },
      ],
      '/ctd/': [
        {
          text: '管制员培训中心',
          items: [
            { text: '培训概述', link: '/ctd/' },
            { text: '培训大纲', link: '/ctd/syllabus' },
            { text: '晋升体系', link: '/ctd/promotion' },
            { text: '面试流程', link: '/ctd/interview' },
            { text: '考核标准', link: '/ctd/exam' },
          ],
        },
        {
          text: '学习中心 Learning Center',
          items: [
            { text: '概述', link: '/ctd/learning-center' },
            { text: '陆空通话', link: '/ctd/radiotelephony' },
            { text: '航图识读', link: '/ctd/eaip-charts' },
            { text: '报文解读', link: '/ctd/metar' },
            { text: '飞行高度层', link: '/ctd/rvsm' },
            { text: '飞行情报区', link: '/ctd/fir' },
            { text: '空域分类', link: '/ctd/airspace' },
          ],
        },
      ],
      '/ptd/': [
        {
          text: '飞行员指南',
          items: [
            { text: '概述', link: '/ptd/' },
            { text: '连飞准备', link: '/ptd/preparation' },
            { text: '飞行规则', link: '/ptd/rules' },
            { text: '陆空通话', link: '/ptd/radiotelephony' },
            { text: '常见问题', link: '/ptd/faq' },
          ],
        },
        {
          text: '学习中心 Learning Center',
          items: [
            { text: '概述', link: '/ptd/learning-center' },
            { text: '连飞教程', link: '/ptd/swift-tutorial' },
            { text: '飞行高度层', link: '/ptd/rvsm' },
            { text: '飞行情报区', link: '/ptd/fir' },
            { text: '空域分类', link: '/ptd/airspace' },
            { text: '班机航路查询', link: '/ptd/airline-route' },
            { text: '航图识读', link: '/ptd/eaip-charts' },
            { text: '报文解读', link: '/ptd/metar-guide' },
          ],
        },
      ],

    },

    footer: {
      message: 'CW 模拟飞行连飞平台 · 官方文档',
      copyright: '© 2026 CW 模拟飞行连飞平台 · <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh">CC BY-NC 4.0</a>',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    outline: {
      label: '本页目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    editLink: {
      pattern: 'https://github.com/cwfly/docs/edit/main/docs/:path',
      text: '编辑此页面',
    },

    lastUpdated: false,
  },

  markdown: {
    lineNumbers: true,
  },
})
