export const theme = {
  colors: {
    // Pallette
    purple: '#5122BB',
    cobaltBlue: '#211b29',
    crimson: '#ff3d6f',

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

    // Statuses
    online: '#53BF3B',
    inRoom: '#573BBF',
    offline: '#7F7676',
  },

  // Source: https://getbootstrap.com/docs/4.0/layout/grid/
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  // in px
  sizes: {
    header: { height: 56 },
    modal: { width: 540 },
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
