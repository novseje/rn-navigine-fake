import { NativeModules } from 'react-native';

const { Navigine } = NativeModules;

if (!Navigine) {
  throw new Error('Navigine module: NativeModule is null');
}

const NaviginePlugin = {

  init: function (apiKey, locationId, callback) {
    console.log("[Navigine] init()");

    callback('OK')
  },

  /**
   * Get active floor image data encoded in Base64
   * @returns {String} Image data in Base64
   */
  getFloorImage: async function () {
    console.log("[Navigine] getFloorImage()");

    return '';
  },

  /**
   * Get current device position
   * @returns {Object} Positin in floor {x: 0.0, y: 0.0} in pixels
   */
  getCurPosition: async function () {
    console.log("[Navigine] getCurPosition()");

    return {x: parseFloat('8'), y: parseFloat('6') };
  },

  /**
   * Get Azimuth (device orientation)
   * @returns Azimuth value in radians
   */
  getAzimuth: async function () {
    console.log("[Navigine] getAzimuth()");

    return parseFloat('1.1');
  },

  /**
   * Get active floor image sizes (width and height) in pixels
   * @returns {Object} Image size {x: 0, y: 0}
   */
  getFloorImageSizes: async function () {
    console.log("[Navigine] getAzimuth()");

    return {x: parseInt('2300'), y: parseInt('1700') };
  },

  /**
   * Get floor image scale (relatively device width)
   * @returns {float} scale
   */
  getZoomScale: async function () {
    console.log("[Navigine] getZoomScale()");

    return parseFloat('1.1');
  },

  /**
   * Return array of all entered zones
   * @returns array of zones [{name: 'ZONE_NAME'}]
   */
  didEnterZones: async function () {
    console.log("[Navigine] didEnterZones()");

    if (response) {
      let name = response.toString();
      let zones = [{name: name}];
      return zones;
    } else {
      return null;
    }
  },

  /**
   * Return name of last entered zone
   * TEMPORARY FUNCTION
   * @returns {String} zone name
   */
  getLastZoneName: async function () {
    console.log("[Navigine] getLastZoneName()");

    let zones = await this.didEnterZones();
    if (zones) {
      var last_element = zones[zones.length - 1];
      return last_element.name;
    } else {
      return false;
    }
  },

  /**
   * Get array of (only first) route points
   * point object format is {x: 0.0, y: 0.0}
   * @returns array of all points [{x: 0.0, y: 0.0}]
   */
  getRoutePoints: async function () {
    console.log("[Navigine] getRoutePoints()");

    if (response) {
      let json = JSON.parse(response);
      if (json) {
        return json;
      } else {
        return null
      }
    } else {
      return null;
    }
  },

  /**
   * Set destionation point to routing
   * @param x floor position in pixels
   * @param y floor position in pixels
   * @returns 'OK' if OK
   */
  setRouteDestination: async function (x, y) {
    console.log("[Navigine] setRouteDestination()");

    return 'OK';
  },

}

export default NaviginePlugin;
