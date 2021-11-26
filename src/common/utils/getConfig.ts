/**
 * @FileName src/common/utils/getConfig.ts
 * @Description 工具类 - 获取配置参数
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/26 16:10:46
 */
import { IGlobalStyleConfig } from '../interfaces';
import variables from '../../style/index.less';

/**
 * 获取全局样式变量
 */
export const getGlobalStyleConfig: () => IGlobalStyleConfig = () => {
  const nuwaPrefix = variables.nuwaPrefix || 'nuwa';
  const config: IGlobalStyleConfig = {
    nuwaPrefix,
    btnPrefix: variables.btnPrefix || `${nuwaPrefix}_btn`,
    fontPrefix: variables.fontPrefix || `${nuwaPrefix}_font`,
    titlePrefix: variables.titlePrefix || `${nuwaPrefix}_title`,
    linkPrefix: variables.linkPrefix || `${nuwaPrefix}_link`,
  };
  return config;
};
