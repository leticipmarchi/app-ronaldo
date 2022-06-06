/* eslint-disable @typescript-eslint/naming-convention */
export interface IVideoAPI{
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: string;
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
}

export interface IListaVideos {
    page: number;
    results: IVideoAPI[];
    total_results: number;
    total_pages: number;
}