export type PublicApiEntryType = {
  count: number;
  entries: Array<{
    API: string;
    Description: string;
    Auth: string;
    HTTPS: boolean;
    Cors: string;
    Link: string;
    Category: string;
  }>;
};
