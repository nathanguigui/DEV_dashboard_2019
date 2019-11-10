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

export interface Ph_UrlParams {
    search?: string
    category?: Ph_Categories
}

export enum Ph_Categories {
    PH_180_1 = "180-1",
    PH_2D = "2d",
    PH_360_1 = "360-1",
    PH_3D = "3d",
    PH_60FPS_1 = "60fps-1",
    PH_AMATEUR = "amateur",
    PH_AMATEUR_GAY = "amateur-gay",
    PH_ANAL = "anal",
    PH_ARAB = "arab",
    PH_ASIAN_GAY = "asian-gay",
    PH_ASIAN = "asian",
    PH_BABE = "babe",
    PH_BABYSITTER = "babysitter",
    PH_BAREBACK_GAY = "bareback-gay",
    PH_BBW = "bbw",
    PH_BEAR_GAY = "bear-gay",
    PH_BEHIND_THE_SCENES = "behind-the-scenes",
    PH_BIG_ASS = "big-ass",
    PH_BIG_DICK = "big-dick",
    PH_BIG_DICK_GAY = "big-dick-gay",
    PH_BIG_TITS = "big-tits",
    PH_BISEXUAL_MALE = "bisexual-male",
    PH_BLACK_GAY = "black-gay",
    PH_BLONDE = "blonde",
    PH_BLOWJOB_GAY = "blowjob-gay",
    PH_BLOWJOB = "blowjob",
    PH_BONDAGE = "bondage",
    PH_BRAZILIAN = "brazilian",
    PH_BRITISH = "british",
    PH_BRUNETTE = "brunette",
    PH_BUKKAKE = "bukkake",
    PH_CARTOON = "cartoon",
    PH_CARTOON_GAY = "cartoon-gay",
    PH_CASTING = "casting",
    PH_CASTING_GAY = "casting-gay",
    PH_CELEBRITY = "celebrity",
    PH_CHUBBY_GAY = "chubby-gay",
    PH_CLOSED_CAPTIONS_GAY = "closed-captions-gay",
    PH_CLOSED_CAPTIONS = "closed-captions",
    PH_COLLEGE_GAY = "college-gay",
    PH_COLLEGE = "college",
    PH_COMPILATION = "compilation",
    PH_COMPILATION_GAY = "compilation-gay",
    PH_COSPLAY = "cosplay",
    PH_CREAMPIE_GAY = "creampie-gay",
    PH_CREAMPIE = "creampie",
    PH_CUCKOLD = "cuckold",
    PH_CUMSHOT_GAY = "cumshot-gay",
    PH_CUMSHOT = "cumshot",
    PH_CZECH = "czech",
    PH_DADDY_GAY = "daddy-gay",
    PH_DESCRIBED_VIDEO = "described-video",
    PH_DOUBLE_PENETRATION = "double-penetration",
    PH_EBONY = "ebony",
    PH_EURO_GAY = "euro-gay",
    PH_EURO = "euro",
    PH_EXCLUSIVE = "exclusive",
    PH_FEET = "feet",
    PH_FEET_GAY = "feet-gay",
    PH_FEMALE_ORGASM = "female-orgasm",
    PH_FETISH_GAY = "fetish-gay",
    PH_FETISH = "fetish",
    PH_FINGERING = "fingering",
    PH_FISTING = "fisting",
    PH_FRENCH = "french",
    PH_FUNNY = "funny",
    PH_GANGBANG = "gangbang",
    PH_GAY = "gay",
    PH_GERMAN = "german",
    PH_GROUP_GAY = "group-gay",
    PH_HANDJOB = "handjob",
    PH_HANDJOB_GAY = "handjob-gay",
    PH_HARDCORE = "hardcore",
    PH_HD_PORN = "hd-porn",
    PH_HD_PORN_GAY = "hd-porn-gay",
    PH_HENTAI = "hentai",
    PH_HUNKS_GAY = "hunks-gay",
    PH_INDIAN = "indian",
    PH_INTERACTIVE = "interactive",
    PH_INTERRACIAL = "interracial",
    PH_INTERRACIAL_GAY = "interracial-gay",
    PH_ITALIAN = "italian",
    PH_JAPANESE = "japanese",
    PH_JAPANESE_GAY = "japanese-gay",
    PH_JOCK_GAY = "jock-gay",
    PH_KOREAN = "korean",
    PH_LATINA = "latina",
    PH_LATINO_GAY = "latino-gay",
    PH_LESBIAN = "lesbian",
    PH_MASSAGE_GAY = "massage-gay",
    PH_MASSAGE = "massage",
    PH_MASTURBATION = "masturbation",
    PH_MATURE_GAY = "mature-gay",
    PH_MATURE = "mature",
    PH_MILF = "milf",
    PH_MILITARY_GAY = "military-gay",
    PH_MUSCLE_GAY = "muscle-gay",
    PH_MUSCULAR_MEN = "muscular-men",
    PH_MUSIC = "music",
    PH_OLD_YOUNG = "old-young",
    PH_ORGY = "orgy",
    PH_PARODY = "parody",
    PH_PARTY = "party",
    PH_PISSING = "pissing",
    PH_POPULAR_WITH_WOMEN = "popular-with-women",
    PH_PORNSTAR = "pornstar",
    PH_PORNSTAR_GAY = "pornstar-gay",
    PH_POV_GAY = "pov-gay",
    PH_POV_1 = "pov-1",
    PH_POV = "pov",
    PH_PUBLIC = "public",
    PH_PUBLIC_GAY = "public-gay",
    PH_PUSSY_LICKING = "pussy-licking",
    PH_REALITY_GAY = "reality-gay",
    PH_REALITY = "reality",
    PH_RED_HEAD = "red-head",
    PH_ROLE_PLAY = "role-play",
    PH_ROMANTIC = "romantic",
    PH_ROUGH_SEX = "rough-sex",
    PH_ROUGH_SEX_GAY = "rough-sex-gay",
    PH_RUSSIAN = "russian",
    PH_SCHOOL = "school",
    PH_SCISSORING = "scissoring",
    PH_SFW = "sfw",
    PH_SMALL_TITS = "small-tits",
    PH_SMOKING = "smoking",
    PH_SOLO_FEMALE = "solo-female",
    PH_SOLO_MALE_GAY = "solo-male-gay",
    PH_SOLO_MALE = "solo-male",
    PH_SQUIRT = "squirt",
    PH_STEP_FANTASY = "step-fantasy",
    PH_STRAIGHT_GUYS_GAY = "straight-guys-gay",
    PH_STRAP_ON = "strap-on",
    PH_STRIPTEASE = "striptease",
    PH_TATTOOED_MEN_GAY = "tattooed-men-gay",
    PH_TATTOOED_WOMEN = "tattooed-women",
    PH_TEEN = "teen",
    PH_THREESOME = "threesome",
    PH_TOYS = "toys",
    PH_TRANS_MALE = "trans-male",
    PH_TRANS_WITH_GIRL = "trans-with-girl",
    PH_TRANS_WITH_GUY = "trans-with-guy",
    PH_TRANSGENDER = "transgender",
    PH_TWINK_GAY = "twink-gay",
    PH_UNCENSORED_1 = "uncensored-1",
    PH_UNCENSORED = "uncensored",
    PH_UNCUT_GAY = "uncut-gay",
    PH_VERIFIED_AMATEURS_GAY = "verified-amateurs-gay",
    PH_VERIFIED_AMATEURS = "verified-amateurs",
    PH_VERIFIED_COUPLES = "verified-couples",
    PH_VERIFIED_MODELS = "verified-models",
    PH_VINTAGE = "vintage",
    PH_VINTAGE_GAY = "vintage-gay",
    PH_VR = "vr",
    PH_VR_GAY = "vr-gay",
    PH_VOYEUR = "voyeur",
    PH_WEBCAM = "webcam",
    PH_WEBCAM_GAY = "webcam-gay",
}

export interface Ph_Thumb {
    size: string;
    width: string;
    height: string;
    src: string;
}

export interface Ph_Tag {
    tag_name: string;
}

export interface Ph_Category {
    category: Ph_Categories;
}

export interface Ph_Video {
    duration: string;
    views: number;
    video_id: string;
    rating: any;
    ratings: number;
    title: string;
    url: string;
    default_thumb: string;
    thumb: string;
    publish_date: string;
    thumbs: Ph_Thumb[];
    tags: Ph_Tag[];
    pornstars: any[];
    categories: Ph_Category[];
    segment: string;
}

export interface Ph_Response {
    videos: Ph_Video[];
}
