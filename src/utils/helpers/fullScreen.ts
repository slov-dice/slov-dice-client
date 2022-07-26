import { isBrowser } from 'utils/constants/app'

export const FullScreen = {
  getValue: (): boolean => (isBrowser ? Boolean(document.fullscreenElement) : false),

  toggle: function () {
    this.getValue() ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  },
}
