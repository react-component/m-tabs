export namespace Models {

  export interface TabData {
    key?: string;
    title: React.ReactNode;
    /** for user's custom extends */
    [key: string]: any;
  }

}