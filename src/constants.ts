export const NAV_ITEMS = [
  { id: 'about', label: '希拉雅', path: '/' },
  { id: 'services', label: '療程服務', path: '/services', mega: true },
  { id: 'team', label: '醫療團隊', path: '/team' },
  { 
    id: 'education', 
    label: '醫美須知', 
    path: '/education/guide',
    children: [
      { label: '醫美新手指南', path: '/education/guide' },
      { label: '常見問題FAQ', path: '/education/faq' },
      { label: '醫師觀點', path: '/education/insights' }
    ]
  },
  { id: 'news', label: '最新消息', path: '/news' },
  { id: 'contact', label: '預約諮詢', path: '/contact', accent: true },
];

export const TREATMENTS = [
  {
    category: '整形外科',
    subcategories: [
      {
        name: '眼部',
        items: ['雙眼皮', '開眼頭', '開眼尾', '眼瞼下置', '眼袋內/外開', '眉切']
      },
      {
        name: '臉部',
        items: ['前額拉提', '中下臉拉提']
      },
      {
        name: '其他',
        items: ['髮際線前移']
      }
    ]
  },
  {
    category: '雷射光療',
    items: ['皮秒', '脈衝光']
  },
  {
    category: '微整形',
    items: ['埋線', '玻尿酸']
  },
  {
    category: '健康醫學',
    items: ['美白針']
  }
];

export const TEAM_MEMBERS = [
  {
    name: '沈院長',
    role: '整形外科主任醫師',
    specialty: '隆鼻、內視鏡隆乳專家',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=600&fit=crop'
  },
  {
    name: '林醫師',
    role: '整形外科專科醫師',
    specialty: '雙眼皮、臉部拉提手術',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=400&h=600&fit=crop'
  }
];
