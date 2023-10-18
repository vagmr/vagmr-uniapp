/**
 * Creates a throttled version of a function that will only execute once every `delay` milliseconds.
 * 通过节流的方式，每隔`delay`毫秒执行一次，支持泛型
 * @param {(...args: T[]) => void} func -要节流的函数  The function to throttle.
 * @param {number} delay -节流的间隔  The number of milliseconds to wait between function calls.
 * @returns {(...args: T[]) => void} - The throttled function.
 */
export const throttle = <T>(
  func: (...args: T[]) => void,
  delay: number,
): ((...args: T[]) => void) => {
  let lastCall = 0
  return function (...args: T[]): void {
    const now = new Date().getTime()
    if (now - lastCall >= delay) {
      func(...args)
      lastCall = now
    }
  }
}
/**
 * Returns a debounced version of the given function.
 * 通过定时器的方式，每隔`t`毫秒执行一次
 * @param {() => void} fn - The function to be debounced.
 * @param {number} t - The delay in milliseconds before invoking the debounced function.
 * @return {() => void} - The debounced function.
 */
export function jl(fn: () => void, t: number): () => void {
  let timing: number | null = null
  return () => {
    if (!timing) {
      timing = setTimeout(() => {
        fn()
        timing = null
      }, t)
    }
  }
}
/**
 * 创建一个基于定时器的防抖函数，返回一个被防抖的函数。
 *
 * @param {() => void} fn - 要被防抖的函数。
 * @param {number} time - 在调用被防抖函数之前的延迟时间（以毫秒为单位）。
 * @return {() => void} - 被防抖的函数。
 */
export const vg_fd = (fn: (...args: any[]) => any, time: number): (() => void) => {
  let timer: number
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(), time)
  }
}
export function vg_f(arg: any, fn: any, time: number) {
  let timer: number
  const args = arg
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(args), time) // 调用fn时传入args作为参数
  }
}
