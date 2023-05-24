type Product = {
  name: string;
  productURL: string;
  description: string;
  introductionURL: string;
  suspended: boolean;
};

export const products: Product[] = [
  {
    name: 'べじはっく',
    productURL: 'https://vghack.com',
    description: '(完全)菜食主義に興味がある方向けの質問サイト',
    introductionURL: 'https://blog.y-temp4.com/entry/vghack',
    suspended: true,
  },
  {
    name: '自己省察テスト',
    productURL: 'https://pvcs.y-temp4.com',
    description: '自分の価値観を見直すためのサービス',
    introductionURL:
      'https://blog.y-temp4.com/entry/personal-values-card-sort-tech-stack',
    suspended: false,
  },
  {
    name: 'AnyMake',
    productURL: 'https://anymake.app',
    description: 'プロダクト投稿型のサービス',
    introductionURL: 'https://note.com/y_temp4/n/n70366e863c13',
    suspended: false,
  },
  {
    name: 'レジスタンスvsスパイ',
    productURL: 'https://devtalk.jp/products/283',
    description: '5人以上で遊べる人狼ライクな戦略型ゲーム',
    introductionURL: 'https://qiita.com/y-temp4/items/9df31146414f6ba45a92',
    suspended: true,
  },
  {
    name: 'ALIS 予約投稿システム',
    productURL: 'https://alis-scheduled-post.web.app/',
    description: 'ALISの記事を予約投稿するためのサービス',
    introductionURL: 'https://alis.to/yt4/articles/K8DG9Gj8W7DV',
    suspended: true,
  },
  {
    name: 'NEMessage',
    productURL: 'http://nemessage.y-temp4.com/',
    description: 'NEMのトランザクションIDからメッセージを表示',
    introductionURL:
      'https://coin.y-temp4.com/nem%E3%81%A7%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%82%92%E4%BC%9D%E3%81%88%E3%82%8Bweb%E3%82%A2%E3%83%97%E3%83%AA%E3%80%8Cnemessage%E3%80%8D%E3%82%92%E5%85%AC%E9%96%8B%E3%81%97%E3%81%BE/',
    suspended: true,
  },
  {
    name: 'Quambu',
    productURL: 'https://y-temp4.github.io/quambu/',
    description:
      'QiitaのIDから記事を取得し、ストック数やはてなブックマーク数で記事をフィルタリングして表示',
    introductionURL: 'http://blog.y-temp4.com/entry/quambu',
    suspended: true,
  },
  {
    name: 'Qiita User Ranking',
    productURL: 'https://qiita-user-ranking.herokuapp.com/',
    description: 'Contribution数によるQiitaユーザーランキング',
    introductionURL: 'http://y-temp4.hatenablog.com/entry/qiita-user-ranking',
    suspended: true,
  },
  {
    name: 'Time of Life',
    productURL: 'http://y-temp4.github.io/time-of-life/',
    description: '人生の残り時間を体感時間で算出',
    introductionURL: 'http://y-temp4.hatenablog.com/entry/time-of-life',
    suspended: false,
  },
  {
    name: 'stock2bookmark',
    productURL: 'https://stock2bookmark.herokuapp.com',
    description:
      'Qiitaでストックした記事をはてなブックマークにブックマークする',
    introductionURL:
      'https://blog.y-temp4.com/entry/i-made-a-web-service-that-bookmark-to-hatena-bookmark-the-article-you-have-stock-in-qiita',
    suspended: true,
  },
];
