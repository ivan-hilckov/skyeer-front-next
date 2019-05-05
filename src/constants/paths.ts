export enum PATHS {
  projects = '/',
  project = '/project/:projectId',
  projectCreate = '/project/create',
  projectPanorama = '/project/:projectId/panorama/:panoramaGroupId/:panoramaId',
  projectSettings = '/project/:projectId/settings/:tab',
  projectLayer = '/project/:projectId/layer',
  projectLayerXyz = '/project/:projectId/layer/xyz/:layerId',
  projectLayerWms = '/project/:projectId/layer/wms/:layerId',
  projectLayerGeoTiff = '/project/:projectId/layer/geotiff/:layerId',
  projectUpload = '/project/:projectId/upload',
  projectUploadPanorama = '/project/:projectId/upload/panorama',
  projectUploadUnit = '/project/:projectId/upload/unit',
  projectUploadUnitAttach = '/project/:projectId/upload/unit-attach/:unitId',
  account = '/account',
  user = '/user/:userId',
  signin = '/signin',
  resetPassword = '/reset-password',
  changePassword = '/change-password/:uid/:token',
  acceptInvite = '/accept-invite/:token',
}

export default PATHS
