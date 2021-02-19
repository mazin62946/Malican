import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import ar from './ar.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  ar
};
//console.log(ReactNative.AsyncStorage.getItem('lang'));
ReactNative.AsyncStorage.getItem('lang')
.then((value) => {
	//console.log(value)
	I18n.locale = (value == 'ar') ? 'ar' : 'en'
	//I18n.locale = (value != 'en') ? 'ar' : 'en'
})
//I18n.locale = (ReactNative.AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en';


const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
// ReactNative.I18nManager.allowRTL(isRTL);
// I18n.start  = ReactNative.I18nManager.isRTL ? 'right' : 'left';
// I18n.end    = ReactNative.I18nManager.isRTL ? 'left' : 'right';
// ReactNative.I18nManager.forceRTL(true);
// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export function lang(key) {
  I18n.locale = key
};

export default I18n;