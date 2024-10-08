import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/#',
    },
    {
      text: 'About',
      links: [
        {
          text: 'Mission',
          href: getPermalink('#'),
        },
        {
          text: 'History',
          href: getPermalink('#'),
        }],
    },
    {
      text: 'Membership',
      href: getPermalink('#'),
    },
    {
      text: 'News',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('#'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
