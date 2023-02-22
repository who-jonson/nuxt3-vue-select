export interface ModuleOptions {
  component?: {
    /*
    * @default `VSelect`
    **/
    as?: string,

    /*
    * @default `true`
    **/
    globalRegister?: boolean,

    /*
    * @default `true`
    **/
    includeCss?: true

  } | false;
}
