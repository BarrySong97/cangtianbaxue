import { request } from '@/.umi/plugin-request/request';

export interface AnimeSearchListItem {
  title: string;
  link: string;
  lastUpdate: string;
  cover: string;
}

export interface Episode {
  rank: string;
  link: string;
}

export async function search(name: string) {
  return request<AnimeSearchListItem[]>(`/api/anime?animeName=${name}`);
}

export async function getAnimeEpisodeByUrl(url: string) {
  return request<Episode[]>(`/api/anime/episedes?animeUrl=${url}`);
}
