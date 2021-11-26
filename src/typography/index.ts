import Typography from './typography';
import Text from './text';
import Link from './link';
import Title from './title';

(Typography as any).Text = Text;
(Typography as any).Link = Link;
(Typography as any).Title = Title;

export * from './interface';

export { default } from './typography';
