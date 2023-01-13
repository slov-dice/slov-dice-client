const dummiesImages = import.meta.glob('../../../../../public/images/dummies/*.webp')

export const dummiesAvatars = Object.keys(dummiesImages).map((path) =>
  path.replace('/public', '').replace('../../../../..', ''),
)
