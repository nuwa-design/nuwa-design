/**
 * @FileName src/grid/index.ts
 * @Description Grid Component
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/28 00:12:49
 */
import Grid from './grid';
import Row from './row';
import Col from './col';

export * from './interface';

(Grid as any).Row = Row;
(Grid as any).Col = Col;

export { default } from './grid';

export { default as Row } from './row';
