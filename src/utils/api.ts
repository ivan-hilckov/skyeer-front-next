import axios, { AxiosError } from 'axios'
import { CANCEL, END } from 'redux-saga'

class DataError extends Error {
  constructor(status: number, statusText: string, data?: any) {
    super(`${status} ${statusText}`)
    Object.setPrototypeOf(this, Object.assign({}, DataError.prototype, { status, statusText, data }))
  }
}

enum METHOD {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}

const baseURL = '/'

type Data = { [key: string]: string | Blob }
type Params = { [key: string]: string | number }

interface Options {
  multipart?: boolean
  params?: Params
  data?: Data
  eventEmitter?: (params: any) => void
  transform?: (params: any) => void
}

const defaultOptions = {
  multipart: false,
  params: undefined,
  data: undefined,
  eventEmitter: undefined,
  transform: undefined,
}

const getHeaders = (multipart: boolean = false) => ({
  'Content-Type': multipart ? 'multipart/form-data' : 'application/json;charset=utf-8',
})

const multipartTransform = (data: Data): FormData =>
  Object.keys(data)
    .filter(key => Boolean(data[key]))
    .reduce((form, key) => {
      form.append(key, data[key])
      return form
    }, new FormData())

const api = (method: METHOD, url: string, options: Options | undefined = defaultOptions) => {
  const source = axios.CancelToken.source()
  const multipart = options.multipart
  const data = options.data
  const params = options.params
  const eventEmitter = options.eventEmitter
  const transform = options.transform

  const promise: any = axios({
    url,
    method,
    baseURL,
    params,
    data,
    headers: getHeaders(multipart),
    cancelToken: source.token,
    ...(multipart && { transformRequest: [data => multipartTransform(data)] }),
    ...(transform && { transformResponse: [data => transform(data)] }),
    ...(eventEmitter && { onUploadProgress: eventEmitter, onDownloadProgress: eventEmitter }),
  })
    .then(function(response) {
      eventEmitter && eventEmitter(END)
      return response
    })
    .catch(function(err: AxiosError) {
      eventEmitter && eventEmitter(END)
      if (err && err.response) {
        throw new DataError(err.response.status, err.response.statusText, err.response.data)
      }
    })

  promise[CANCEL] = source.cancel

  return promise
}

export default {
  [METHOD.GET]: (url: string, options?: Options) => api(METHOD.GET, url, options),
  [METHOD.POST]: (url: string, options?: Options) => api(METHOD.POST, url, options),
  [METHOD.DELETE]: (url: string, options?: Options) => api(METHOD.DELETE, url, options),
  [METHOD.PATCH]: (url: string, options?: Options) => api(METHOD.PATCH, url, options),
  [METHOD.PUT]: (url: string, options?: Options) => api(METHOD.PUT, url, options),
}
