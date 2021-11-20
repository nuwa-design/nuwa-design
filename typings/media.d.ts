/**
 * @FileName typings/media.d.ts
 * @Description 统一声明 媒体类资源 命名
 * @Author qulongjun <contact@nuwa.design>
 * @Date 2021/11/20 12:28:10
 */

declare module '*.css' {
    interface ClassNames {
        [className: string]: string;
    }
    const classNames: ClassNames;
    export = classNames;
}

declare module '*.less' {
    interface ClassNames {
        [className: string]: string;
    }
    const classNames: ClassNames;
    export = classNames;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
