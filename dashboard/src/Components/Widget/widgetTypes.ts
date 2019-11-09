import {Widget} from "../../Graphql/clientTypes";

export interface WidgetProps {
    widget: Widget
    moveLeft: (widget:Widget) => Promise<boolean>
    moveRight: (widget:Widget) => Promise<boolean>
    remove: (widget:Widget) => void
}

export interface WorldTimeWidgetSettings {
    timezone: string
}

export interface PornHubWidgetSettings {
    query: string
}

export interface CryptocompareWidgetSettings {
    CryptoType: string
    ChangeType: string
}

export interface NumberApiWidgetSettings {
    value: string
}

export interface IcnbWidgetSettings {
    explicit: string

}

export interface RatesApiWidgetSettings {
    ChangeType: string
}