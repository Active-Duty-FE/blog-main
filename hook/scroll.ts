export function useCheckContentInScreen(contentTop: number) {
  const windowScrollTop = window.scrollY
  const windowHeight = window.innerHeight

  if (contentTop - windowScrollTop < windowHeight / 2) {
    return true
  } else return false
}
