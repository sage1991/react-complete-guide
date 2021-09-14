type VoidFunction = (...args: any[]) => void

export const throttle = <T extends VoidFunction> (func: T, time: number) => {
  let timer: NodeJS.Timer | null = null;

  const proxy = (...args: any[]) => {
    if (timer) return
    func(...args)
    timer = setTimeout(() => timer = null, time)
  }

  return proxy as T;
}
