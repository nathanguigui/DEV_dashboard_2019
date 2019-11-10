import {Ph_UrlParams} from "../../widgetTypes";


const base_uri = "https://cors-anywhere.herokuapp.com/https://www.pornhub.com/webmasters/search?";

export function pornHubUrlBuilder(props: Ph_UrlParams): string {
    let url: string = base_uri;
    let first = true;
    if (typeof props.search === "string") {
        url += "search=" + props.search;
        first = false
    }
    if (props.category) {
        if (!first)
            url += "&";
        url += "category=" + props.category
    }
    return url;
}
