import { request } from '@/.umi/plugin-request/request';

export interface FictionSearchListItem {
  title: string;
  link: string;
  author: string;
  lastUpdateDate: string;
  lastUpdateChapterUrl: string;
  lastUpdateChapterTitle: string;
}

export interface FictionCatalog {
  name: string;
  link: string;
}

export async function search(name: string) {
  return request<FictionSearchListItem[]>(`/api/fiction?fictionName=${name}`);
}

export async function getFictionCatalogByUrl(url: string) {
  return request<FictionCatalog[]>(
    `/api/fiction/catalog?fictionCatalogLink=${url}`,
  );
}

export async function getFictionContentByUrl(url: string) {
  return request<string>(
    `/api/fiction/content?contentLink=${url}`,
  );
}
