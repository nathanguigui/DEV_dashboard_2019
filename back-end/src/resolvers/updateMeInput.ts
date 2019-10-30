import {inputObjectType, objectType} from "nexus";

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
        t.string('timezone')
    },
});
