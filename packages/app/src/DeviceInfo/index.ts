import DeviceInfo from 'react-native-device-info';

let deviceId = DeviceInfo.getDeviceId();
let model = DeviceInfo.getModel();
export {
    deviceId,
    model
}