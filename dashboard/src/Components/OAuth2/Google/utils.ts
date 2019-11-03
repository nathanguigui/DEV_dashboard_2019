
export enum googleScopes {
    GMAIL_LABELS = "https://www.googleapis.com/auth/gmail.labels"
}

export enum responseTypes {
    CODE = "code"
}

export enum accessTypes {
    REFRESH_TOKEN = "offline"
}

export interface googleUrlBuilderProps {
    client_id?: string
    response_type?: responseTypes
    scope: googleScopes
    redirect_uri?: string
    access_type?: accessTypes
}

export const googleUrlBuilder = (props: googleUrlBuilderProps): string => {
    return (
        "https://accounts.google.com/o/oauth2/v2/auth?" +
        "client_id=" + (typeof props.client_id === "string" ? props.client_id : process.env.REACT_APP_GOOGLE_CLIENT_ID)
        + "&response_type=" + (typeof props.response_type !== "undefined" ? props.response_type : responseTypes.CODE)
        + "&scope=" + (typeof props.scope !== "undefined" ? props.scope : googleScopes.GMAIL_LABELS)
        + "&redirect_uri=" + (typeof props.redirect_uri === "string" ? props.redirect_uri : process.env.REACT_APP_OAUTH2_REDIRECT_URI)
        + "&access_type=" + (typeof props.access_type !== "undefined" ? props.access_type : accessTypes.REFRESH_TOKEN)
    )
};
