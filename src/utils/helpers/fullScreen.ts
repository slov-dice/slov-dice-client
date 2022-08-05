export const FullScreen = {
  getValue: (): boolean => Boolean(document.fullscreenElement),

  toggle: function () {
    this.getValue() ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  },
}
