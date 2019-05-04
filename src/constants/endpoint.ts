// import invariant from 'invariant'
import generatePath from 'utils/generatePath'

const getUrl = (url: string) => (id?: string | number): string =>
  `${url.includes(':id') ? generatePath(url, { id }) : url}/`

const ENDPOINT = {
  account: getUrl('api/accounts/info/whoami'),
  login: getUrl('api/accounts/login'),
  logout: getUrl('api/accounts/logout'),
  accept: getUrl('api/accounts/invite-accept'),
  passwordReset: getUrl('api/accounts/password/reset'),
  passwordResetConfirm: getUrl('api/accounts/password/reset/confirm'),
  passwordChange: getUrl('api/accounts/password/change'),
  organization: getUrl('api/organization'),
  panoramaGroup: getUrl('api/project-panorama-group'),
  projectUserSearch: getUrl('api/project-user-search'),
  projectUser: getUrl('api/project-user'),
  distance: getUrl('api/measure-distance'),
  height: getUrl('api/measure-height'),
  area: getUrl('api/measure-area'),
  profile: getUrl('api/measure-height-profile'),
  angle: getUrl('api/measure-angle'),
  volume: getUrl('api/measure-volume-cutfill'),
  complete: getUrl('api/measure-volume-complete'),
  future: getUrl('api/measure-volume-future'),
  cartogram: getUrl('api/measure-volume-cutfill-collection'),
  geoserver: getUrl('geoserver/wms'),
  shp2geojson: getUrl('api/shp2geojson'),
  user: getUrl('api/accounts/info/:id?'),
  project: getUrl('api/project/:id?'),
  material: getUrl('api/project-material/:id?'),
  print: getUrl('api/raster-print/:id?'),
  layer: getUrl('api/layer/:id?'),
  wms: getUrl('api/layer-wms/:id?'),
  xyz: getUrl('api/layer-xyz/:id?'),
  geotiff: getUrl('api/layer-geotif/:id?'),
  file: getUrl('api/layer-file/:id?'),
  measureAttach: getUrl('api/layer-measure-attach/:id?'),
  measure: getUrl('api/layer-measure/:id?'),
  labelsMeasure: getUrl('api/labels-measure/:id?'),
  unit: getUrl('api/project-unit/:id?'),
  attach: getUrl('api/project-unit-attach/:id?'),
  projectInvite: getUrl('api/project-invite/:id?'),
  panorama: getUrl('api/project-panorama/:id?'),
  layers: getUrl('api/labels/:id/layers'),
}

export default ENDPOINT
