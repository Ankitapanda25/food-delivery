interface NxStatic {
  json: {
    parse: (json: string) => any;
    stringify: (json: any) => string;
  };
  parse: (json: string) => any;
  stringify: (json: any) => string;
}
