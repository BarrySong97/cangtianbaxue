import { request } from '@/.umi/plugin-request/request';

export interface FictionSearchListItem {
  title: string;
  cover: string;
  link: string;
  author: string;
}

export async function search(name: string) {
  return request<FictionSearchListItem[]>(`/api/fiction?fictionName=${name}`);
}
