type VoidFunction = (...args: any[]) => void

export const debounce = <T extends VoidFunction> (func: T, time: number): T => {
  let timer: NodeJS.Timer | null = null

  const proxy = (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      func(...args)
    }, time)
  }

  return proxy as T
}
