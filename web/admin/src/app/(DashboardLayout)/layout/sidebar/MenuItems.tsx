import {
    IconAperture,
    IconCopy,
    IconLayoutDashboard,
    IconLogin,
    IconMoodHappy,
    IconTypography,
    IconUserPlus,
    IconBooks
} from "@tabler/icons-react";

import {uniqueId} from "lodash";

const Menuitems = [
    {
        navlabel: true,
        subheader: "Home",
    },

    {
        id: uniqueId(),
        title: "Dashboard",
        icon: IconLayoutDashboard,
        href: "/",
    },
    {
        id: 'DevGuide',
        title: "DevGuide",
        icon: IconBooks,
        href: "/devguide",
    },
    {
        navlabel: true,
        subheader: "Utilities",
    },
    {
        id: uniqueId(),
        title: "Typography",
        icon: IconTypography,
        href: "/utilities/typography",
    },
    {
        id: uniqueId(),
        title: "Shadow",
        icon: IconCopy,
        href: "/utilities/shadow",
    },
    {
        navlabel: true,
        subheader: "Auth",
    },
    {
        id: uniqueId(),
        title: "Login",
        icon: IconLogin,
        href: "/authentication/login",
    },
    {
        id: uniqueId(),
        title: "Register",
        icon: IconUserPlus,
        href: "/authentication/register",
    },
    {
        navlabel: true,
        subheader: "Extra",
    },
    {
        id: uniqueId(),
        title: "Icons",
        icon: IconMoodHappy,
        href: "/icons",
    },
    {
        id: uniqueId(),
        title: "Sample Page",
        icon: IconAperture,
        href: "/sample-page",
    },
];

export default Menuitems;
