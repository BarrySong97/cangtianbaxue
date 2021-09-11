import { request } from '@/.umi/plugin-request/request';

export interface ComicSearchListItem {
  title: string;
  link: string;
  lastUpdate: string;
  cover: string;
}

export interface Chapter {
  rank: string;
  link: string;
}

export async function search(name: string) {
  return request<ComicSearchListItem[]>(`/api/comic?comicName=${name}`);
}

export async function getComicChapterByUrl(url: string) {
  return request<Chapter[]>(`/api/comic/episedes?comicUrl=${url}`);
}
