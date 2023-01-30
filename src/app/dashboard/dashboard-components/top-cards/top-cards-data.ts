export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-flag',
        title: '1.3k',
        subtitle: 'Totali i raporteve'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '$6.2k',
        subtitle: 'Shperblime ne €'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-people',
        title: '4568',
        subtitle: 'Perdorues'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-microsoft-teams',
        title: '21',
        subtitle: 'Administrator'
    },

]
