import { createAPI } from '{{$$.relative("util")}}';
import config from '{{$$.relative("config")}}';
let mockConfig:{
  //允许任意属性存在
  [propName: string]: string
} = {
  mock: '{{$$.joinUrl(config.host, "mock", data.project._id, data.project.url)}}',
  dev: '',
  pre: '',
  prod: ''
}
const baseUrl:string = mockConfig[config.env || 'mock'];

export default createAPI(baseUrl);
