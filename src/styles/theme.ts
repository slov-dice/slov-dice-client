export enum E_MediaQuery {
  xl = '(max-width: 1140px)',
  lg = '(max-width: 960px)',
  md = '(max-width: 720px)',
  sm = '(max-width: 540px)',
}

export const theme = {
  colors: {
    // Pallette
    purple: '#5122BB',
    cobaltBlue: '#211b29',
    primary: '#ff3d6f',
    primary_50: '#ff3d6f' + '80',
    primary_80: '#ff3d6f' + 'CC',

    white: '#F5F5F5',
    white_05: '#F5F5F5' + '0D',
    white_10: '#F5F5F5' + '1A',
    white_30: '#F5F5F5' + '4D',
    white_50: '#F5F5F5' + '80',
    white_80: '#F5F5F5' + 'CC',

    black: '#212121',
    black_00: '#212121' + '00',
    black_30: '#212121' + '4D',
    black_50: '#212121' + '80',
    black_80: '#212121' + 'CC',

    authForm: '#32343d' + 'CC',

    // Statuses
    online: '#53BF3B',
    inRoom: '#573BBF',
    offline: '#7F7676',
  },

  // Source: https://getbootstrap.com/docs/4.0/layout/grid/
  media: {
    xl: E_MediaQuery.xl,
    lg: E_MediaQuery.lg,
    md: E_MediaQuery.md,
    sm: E_MediaQuery.sm,
  },

  // in px
  sizes: {
    header: { height: 56 },
    modal: { width: 640 },
    authForm: { width: 540, height: 800 },
    sidePanel: { width: 320 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    sideMenuOverlay: 100,
    sideMenuContent: 110,
    sideMenuControl: 120,
    sidePanel: 200,
    modalsWrap: 500,
    modalOverlay: 501,
    modalWindow: 502,
  },
}

export type Theme = typeof theme
