import { createAPI } from '../util';
import config from '../config';
let mockConfig:{
  //允许任意属性存在
  [propName: string]: string
} = {
  mock: 'http://10.0.2.69:7300/mock/60b59944e57cd70022c72482/sso-web',
  dev: '',
  pre: '',
  prod: ''
}
const baseUrl:string = mockConfig[config.env || 'mock'];

export default createAPI(baseUrl);
