export enum PornHubCategories {
    PH_HARD = "hardcore",
    PH_HENTAI = "hentai",
    PH_GAY = "gay",
}

export interface PornHubUrlParams {
    search?: string
    category: PornHubCategories
}

const base_uri = "https://www.pornhub.com/webmasters/search?";

export function pornHubUrlBuilder() {

}
