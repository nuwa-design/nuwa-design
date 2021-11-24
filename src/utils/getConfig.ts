/**
 * @FileName src/utils/getConfig.ts
 * @Description 获取项目配置信息
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/23 14:43:50
 */
import { IGlobalStyleConfig } from '../interfaces/IGlobalConfig';
import variables from '../styles/index.less';

/* 获取全局样式变量，来源：src/styles/index.less */
export const getGlobalStyleConfig: () => IGlobalStyleConfig = () => {
  const config: IGlobalStyleConfig = {
    nuwaPrefix: variables.nuwaPrefix || 'nuwa',
  };
  return config;
};

export default {};
