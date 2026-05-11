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
        items: [
          { name: '雙眼皮', id: 'double-eyelid' },
          { name: '開眼頭', id: 'inner-canthoplasty' },
          { name: '開眼尾', id: 'lateral-canthoplasty' },
          { name: '眼瞼下置', id: 'lower-eyelid-retraction' },
          { name: '眼袋內/外開', id: 'blepharoplasty' },
          { name: '眉切', id: 'eyebrow-lift' }
        ]
      },
      {
        name: '臉部',
        items: [
          { name: '前額拉提', id: 'forehead-lift' },
          { name: '中下臉拉提', id: 'mid-lower-face-lift' }
        ]
      },
      {
        name: '其他',
        items: [
          { name: '髮際線前移', id: 'hairline-lowering' }
        ]
      }
    ]
  },
  {
    category: '雷射光療',
    items: [
      { name: '皮秒', id: 'picosecond' },
      { name: '脈衝光', id: 'ipl' }
    ]
  },
  {
    category: '微整形',
    items: [
      { name: '埋線', id: 'thread-lift' },
      { name: '玻尿酸', id: 'filler' }
    ]
  },
  {
    category: '健康醫學',
    items: [
      { name: '美白針', id: 'whitening-drip' }
    ]
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
