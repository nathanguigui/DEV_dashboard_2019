import {inputObjectType, objectType} from "nexus";

export const UpdateMeWidgetsInput = inputObjectType({
    name: "UpdateMeWidgetsInput",
    definition(t) {
        t.list.field('connect', {type: "WidgetWhereUniqueInput"})
        t.list.field('disconnect', {type: "WidgetWhereUniqueInput"})
    },
})

export const UpdateMeInput = inputObjectType({
    name: 'UpdateMeInput',
    definition(t) {
        t.string('email'),
        t.string('surname'),
        t.string('address'),
        t.int('refreshTime'),
        t.string('backgroundImage'),
        t.string('googleToken'),
        t.string('intraToken'),
        t.boolean('sidebarDisabled'),
        t.string('phone'),
        t.string('spotifyToken'),
        t.field('widgets', {type: "UpdateMeWidgetsInput" as any}),
        t.string('timezone')
    },
});
