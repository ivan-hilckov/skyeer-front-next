import pathToRegexp, { PathFunction } from 'path-to-regexp'

interface ICache<T> {
  [key: string]: T
}

const cache: ICache<PathFunction> = {}
const cacheLimit = 10000
let cacheCount = 0

function compilePath(path: string): PathFunction {
  if (cache[path]) return cache[path]

  const generator = pathToRegexp.compile(path)

  if (cacheCount < cacheLimit) {
    cache[path] = generator
    cacheCount++
  }

  return generator
}

const generatePath = (path = '/', keys = {}) => (path === '/' ? path : compilePath(path)(keys))

export default generatePath
