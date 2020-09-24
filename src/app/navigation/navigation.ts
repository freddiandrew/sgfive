import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'home',
                title    : 'Home',
                translate: 'NAV.HOME',
                type     : 'item',
                icon     : 'email',
                url      : '/home',
            },
            {
                id       : 'login',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/auth/login',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'finance',
                title    : 'Finance',
                translate: 'NAV.FINANCE',
                type     : 'item',
                icon     : 'email',
                url      : '/finance',
               
            },
            {
                id       : 'hostel',
                title    : 'Hostel',
                translate: 'NAV.HOSTEL',
                type     : 'item',
                icon     : 'email',
                url      : '/hostel',
            },
            {
                id       : 'hrd',
                title    : 'Human Resource',
                translate: 'NAV.HRD',
                type     : 'item',
                icon     : 'email',
                url      : '/hrd',
                
            },
            {
                id       : 'settings',
                title    : 'Settings',
                translate: 'NAV.SETTINGS',
                type     : 'item',
                icon     : 'email',
                url      : '/settings',
                
            },
            {
                id       : 'inv',
                title    : 'Inventory',
                translate: 'NAV.INVENTORY',
                type     : 'item',
                icon     : 'email',
                url      : '/inventory',
                
            },
            {
                id       : 'transport',
                title    : 'Transport',
                translate: 'NAV.TRANSPORT',
                type     : 'item',
                icon     : 'email',
                url      : '/transport',
            }


        ]

    },
    


];
