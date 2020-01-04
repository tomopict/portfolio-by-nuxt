export const AUTHOR_SKILL = {
  html: {
    label: 'HTML',
    star: 5,
    term: '経験年数:6年',
    text:
      'SEO対策、構造化を意識したマークアップができる。AMP HTMLなどの実装も経験あり'
  },
  css: {
    label: 'CSS',
    star: 5,
    term: '経験年数:6年',
    text:
      'FLOCSSをベースとしたCSS設計経験あり。最近はもっぱらSCSSを利用して記載することが多い'
  },
  javascript: {
    label: 'JavaScript',
    star: 5,
    term: '経験年数:4年',
    text: 'フレームワークを利用しないSPAの実装。Vue.jsをベースとしたSPAの実装'
  },
  php: {
    label: 'PHP',
    star: 3,
    term: '経験年数:4年',
    text:
      'WordPressのテーマ作成。CakePHPを開発。Smartyを用いたフロントエンド実装'
  },
  other: {
    label: 'Other',
    star: 1,
    term: '経験年数:半年〜1年',
    text: '業務外や主業務以外で以下の言語の利用経験。Python/Ruby'
  }
}

export const AUTHOR_FW = {
  vuejs: {
    label: 'Vue.js',
    star: 4,
    term: '経験年数:3年半',
    text:
      '業務用ツールや小規模なページ数のSPAの実装。VuexやAxiosを用いたAPIとの疎通など'
  },
  nuxtjs: {
    label: 'NuxtJS',
    star: 4,
    term: '経験年数:3年',
    text:
      '中〜大規模なサイトの構築や、機能追加など。Vuexやmiddleware層を利用したデータのやり取り'
  },
  other: {
    label: 'Other',
    star: 1,
    term: '経験年数:1年',
    text: '業務外や主業務以外での利用経験。CakePHP/Django/Ruby on Rails'
  }
}

export const AUTHOR_SNS = {
  twitter: {
    label: 'twitter',
    value: 'twitter',
    link: 'https://twitter.com/tomopict'
  },
  github: {
    label: 'github',
    value: 'github',
    link: 'https://github.com/tomopict/'
  }
}

export default {
  AUTHOR_SKILL,
  AUTHOR_FW,
  AUTHOR_SNS
}
