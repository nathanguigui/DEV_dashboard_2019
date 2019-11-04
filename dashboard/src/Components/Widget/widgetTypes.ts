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
