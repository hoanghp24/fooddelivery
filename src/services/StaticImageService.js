import {ApiConstants} from '../constants';

const getFlagIcon = (code = 'VN', size = ApiConstants.COUNTRY_FLAG.SIZE[64]) =>
  `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${size}/${code.toLowerCase()}.png`;

export default {getFlagIcon};
