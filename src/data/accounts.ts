type Account = {
  name: string;
  url: `https://${string}`;
  bgColor: `#${string}`;
  textColor: '#fff' | '#343a40'; // --oc-gray-8
};

export const accounts: Account[] = [
  {
    name: 'ブログ',
    url: 'https://blog.y-temp4.com',
    bgColor: '#339af0',
    textColor: '#fff',
  },
  {
    name: 'X(Twitter)',
    url: 'https://twitter.com/y_temp4',
    bgColor: '#000',
    textColor: '#fff',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/y-temp4',
    bgColor: '#333',
    textColor: '#fff',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UC_fi1ofi5LiFpTs6Hys3aNw',
    bgColor: '#ff0000',
    textColor: '#fff',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/yt4',
    bgColor: '#3ea8ff',
    textColor: '#fff',
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/y-temp4',
    bgColor: '#55c500',
    textColor: '#fff',
  },
  {
    name: 'しずかなインターネット',
    url: 'https://sizu.me/yt4',
    bgColor: '#fff',
    textColor: '#343a40',
  },
];
