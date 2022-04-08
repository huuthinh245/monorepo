import * as ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
const includeExtra = true;
const options: ImagePicker.CameraOptions = {
  saveToPhotos: true,
  mediaType: 'photo' as ImagePicker.MediaType,
  includeBase64: false,
  includeExtra,
  maxHeight: 1280,
  maxWidth: 960,
};

const takePhoto = (): Promise<ImagePicker.Asset> => {
  return new Promise(async (resolve, reject) => {
    const isWritePermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    const isCamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (isWritePermission && isCamera) {
      ImagePicker.launchCamera(options, response => {
        if (response?.assets?.[0].uri) {
          let obj = response?.assets?.[0];
          resolve(obj as ImagePicker.Asset);
        } else {
          reject(response.errorMessage ?? response?.didCancel ?? '');
        }
      });
    } else {
      reject('Permission');
    }
  });
};

const getPhoto = (): Promise<ImagePicker.Asset> => {
  return new Promise(async (resolve, reject) => {
    const isWritePermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    const isReadPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (isWritePermission && isReadPermission) {
      ImagePicker.launchImageLibrary(options, response => {
        if (response?.assets?.[0].uri) {
          let obj = response?.assets?.[0];
          resolve(obj as ImagePicker.Asset);
        } else {
          reject(response.errorMessage ?? response?.didCancel ?? '');
        }
      });
    } else {
      reject('Permission');
    }
  });
};

export {takePhoto, getPhoto};
