export enum E_MediaQuery {
  xl = '(max-width: 1140px)',
  lg = '(max-width: 960px)',
  md = '(max-width: 720px)',
  sm = '(max-width: 540px)',
}

export const theme = {
  colors: {
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
    black_90: '#212121' + 'E6',
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
    authForm: { width: 520, height: 800 },
    verificationForm: { width: 520, height: 460 },
    authCallbackForm: { width: 520, height: 460 },
    sidePanel: { width: 320 },
    window: 420,
    windowHeader: { height: 36 },
  },

  // in ms
  durations: {
    ms50: 50,
    ms100: 100,
    ms300: 300,
  },

  // z-index
  order: {
    hero: 10,
    content: 20,
    window: 100,
    sidePanelContent: 400,
    sidePanelOverlay: 299,
    header: 300,
    modalsWrap: 500,
    modalOverlay: 510,
    modalWindow: 520,
    sideMenuOverlay: 1000,
    sideMenuContent: 1010,
    sideMenuControl: 1020,
  },
}

export type Theme = typeof theme
