export interface Project {
  id: string;
  title: string;
  location?: string;
  description?: string[];
  windowsCount?: number;
  mirrorsCount?: number;
  generalContractor?: string;
  productLine?: string;
  coverImage: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'cottonwood-broadway',
    title: 'Cottonwood Broadway',
    coverImage: '/images/projects/cottonwood broadway/cb-4-scaled.jpg',
    images: [
      '/images/projects/cottonwood broadway/060a4d557062f2b59852ed170156d63b-scaled.jpg',
      '/images/projects/cottonwood broadway/2a4833c3-61f7-484c-8581-cbc8135b7cb7-scaled.jpg',
      '/images/projects/cottonwood broadway/4db44386-5294-4a0d-a6a7-90a141b35446-scaled.jpg',
      '/images/projects/cottonwood broadway/60428650-5ec9-48da-a63d-60b8e1202540-scaled.jpg',
      '/images/projects/cottonwood broadway/6a39352b-ee28-4e4a-a16a-ce0e83c3cdfa-scaled.jpg',
      '/images/projects/cottonwood broadway/777561be-6ab6-4a1e-8d51-93d7fced4ec1-scaled.jpg',
      '/images/projects/cottonwood broadway/7f1f2967-bcd9-4b48-abcd-8149d6ec4868-scaled.jpg',
      '/images/projects/cottonwood broadway/9beecc3d-c846-41f7-8226-f7c835a1d4ad-scaled.jpg',
      '/images/projects/cottonwood broadway/b129f334-1b73-42a2-9e22-b5b58dbe96df-scaled.jpg',
      '/images/projects/cottonwood broadway/cb-4-scaled.jpg',
      '/images/projects/cottonwood broadway/d5a1ba2f-d7a7-41dc-b8bf-8c61f98c1e53-scaled.jpg',
      '/images/projects/cottonwood broadway/ed85a695-68c4-4209-87a9-3c2e49435a13-scaled.jpg'
    ]
  },
  {
    id: '85-north',
    title: '85 North',
    coverImage: '/images/projects/85 north/85-north-photo-1.png',
    images: [
      '/images/projects/85 north/85-north-photo-1.png',
      '/images/projects/85 north/85-north-photo-2.png',
      '/images/projects/85 north/85-north-photo-3.png',
      '/images/projects/85 north/85-north-photo-4.png',
      '/images/projects/85 north/85-north-photo-5.png',
      '/images/projects/85 north/85-north-photo-6.png',
    ]
  },
  {
    id: 'citizen',
    title: 'The Citizen',
    coverImage: '/images/projects/citizen/citizen-photo-1.png',
    images: [
      '/images/projects/citizen/citizen-photo-1.png',
      '/images/projects/citizen/citizen-photo-2.png',
      '/images/projects/citizen/citizen-photo-3.png',
      '/images/projects/citizen/citizen-photo-4.png',
      '/images/projects/citizen/citizen-photo-5.png',
    ]
  },
  {
    id: 'bloomington',
    title: 'Bloomington',
    coverImage: '/images/projects/bloomington/bloomingon-photo-1.png',
    images: [
      '/images/projects/bloomington/bloomingon-photo-1.png',
      '/images/projects/bloomington/bloomington-photo-2.png',
      '/images/projects/bloomington/bloomington-photo-3.png',
      '/images/projects/bloomington/bloomington-photo-4.png',
    ]
  },
  {
    id: 'sloane',
    title: 'The Sloane',
    coverImage: '/images/projects/sloane/sloane-photo-1.png',
    images: [
      '/images/projects/sloane/sloane-photo-1.png',
      '/images/projects/sloane/sloane-photo-2.png',
      '/images/projects/sloane/sloane-photo-3.png',
      '/images/projects/sloane/sloane-photo-4.png',
      '/images/projects/sloane/sloane-photo-5.png',
      '/images/projects/sloane/sloane-photo-6.png',
    ]
  },
  {
    id: 'gladhouse',
    title: 'Gladhouse',
    coverImage: '/images/projects/gladhouse/gladhouse-photo-1.png',
    images: [
      '/images/projects/gladhouse/gladhouse-photo-1.png',
      '/images/projects/gladhouse/gladhouse-photo-2.png',
      '/images/projects/gladhouse/gladhouse-photo-3.png',
      '/images/projects/gladhouse/gladhouse-photo-4.png',
    ]
  },
  {
    id: 'cottonwood-highland',
    title: 'Cottonwood Highland',
    coverImage: '/images/projects/cottonwood-highland/cottonwood-highlands-photo-1.png',
    images: [
      '/images/projects/cottonwood-highland/cottonwood-highlands-photo-1.png',
      '/images/projects/cottonwood-highland/cottonwood-highlands-photo-2.png',
      '/images/projects/cottonwood-highland/cottonwood-highlands-photo-3.png',
      '/images/projects/cottonwood-highland/cottonwood-highlands-photo-4.png',
      '/images/projects/cottonwood-highland/cottonwood-highlands-photo-5.png',
      '/images/projects/cottonwood-highland/cottonwood-highlands-photo-6.png',
    ]
  },
  {
    id: 'lofts-at-riversedge',
    title: 'Lofts at Riversedge',
    coverImage: '/images/projects/lofts at riversedge/lofts-at-river-photo-1.png',
    images: [
      '/images/projects/lofts at riversedge/lofts-at-river-photo-1.png',
      '/images/projects/lofts at riversedge/lofts-at-river-photo-2.png',
      '/images/projects/lofts at riversedge/lofts-at-river-photo-3.png',
      '/images/projects/lofts at riversedge/lofts-at-river-photo-4.png',
      '/images/projects/lofts at riversedge/lofts-at-river-photo-5.png',
      '/images/projects/lofts at riversedge/lofts-at-river-photo-6.png',
    ]
  },
  {
    id: 'momentum',
    title: 'Momentum',
    coverImage: '/images/projects/momentum/momentum-window-photo-1.png',
    images: [
      '/images/projects/momentum/momentum-photo-.png',
      '/images/projects/momentum/momentum-window-photo-1.png',
      '/images/projects/momentum/momentum-window-photo-2.png',
      '/images/projects/momentum/momentum-window-photo-3.png',
    ]
  },
  {
    id: 'triview-ii',
    title: 'Triview II',
    coverImage: '/images/projects/triview II/triview-ii-photo-2.png',
    images: [
      '/images/projects/triview II/triview-ii-photo-2.png',
      '/images/projects/triview II/triview-ii-photo-3.png',
      '/images/projects/triview II/triview-ii-photo-4-1.png',
      '/images/projects/triview II/triview-ii-photo-8.png',
      '/images/projects/triview II/triview-ii-photo-9.png',
      '/images/projects/triview II/triview-ii-picture-2.jpg',
    ]
  },
  {
    id: 'sanctuary',
    title: 'Sanctuary',
    productLine: 'Windows & Storefront Installation',
    description: [
      'Ox Glass delivered the window and glass scope for this multifamily new construction project, coordinating product delivery and installation around an active build schedule.',
    ],
    coverImage: '/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f1308115592rd-w2048_h1536.webp',
    images: [
      '/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f1308115592rd-w2048_h1536.webp',
      '/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f1493566501rd-w2048_h1536.webp',
      '/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f2253219434rd-w2048_h1536.webp',
      '/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f2701462556rd-w2048_h1536.webp',
      '/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f3006839632rd-w2048_h1536.webp',
      '/images/projects/sanctuary/1-Feb 05 2026 02_22pm-Kvo6.jpg',
      '/images/projects/sanctuary/2-Feb 05 2026 02_23pm-PD8Z.jpg',
      '/images/projects/sanctuary/3-Feb 25 2026 03_08pm-HY5T.jpg',
      '/images/projects/sanctuary/4-Feb 25 2026 03_09pm-aoXa.jpg',
      '/images/projects/sanctuary/NW-24.09.08-copy.webp',
    ]
  },
  {
    id: 'victory-heights',
    title: 'Victory Heights',
    productLine: 'Windows & Storefront Installation',
    description: [
      'A commercial new construction project where Ox Glass handled window and storefront installation with an emphasis on clean finish detail and schedule-driven coordination.',
    ],
    coverImage: '/images/projects/victory heights/3e481033-8f0c-49d6-9cea-b222bcbd7be2.jpg',
    images: [
      '/images/projects/victory heights/3e481033-8f0c-49d6-9cea-b222bcbd7be2.jpg',
      '/images/projects/victory heights/cea1c06e-db77-4fd7-8693-6ab1f590a969.jpg',
    ]
  },
  {
    id: 'ridgeview',
    title: 'Ridgeview',
    productLine: 'Windows & Glass Installation',
    description: [
      'Multi-building new construction project with window and glass installation coordinated building-by-building to keep pace with the general contractor.',
    ],
    coverImage: '/images/projects/Ridgeview/Bldng 9 Screen-1-Jun 10 2025 10_40am-tA1x.jpg',
    images: [
      '/images/projects/Ridgeview/Bldng 9 Screen-1-Jun 10 2025 10_40am-tA1x.jpg',
      '/images/projects/Ridgeview/Bldng 9 Screen-3-Jun 10 2025 10_40am-2dcB.jpg',
      '/images/projects/Ridgeview/Bldng 9 Screen-4-Jun 10 2025 10_41am-RSyW.jpg',
      '/images/projects/Ridgeview/Bldng 9 Screen-5-Jun 10 2025 10_41am-izAo.jpg',
      '/images/projects/Ridgeview/Bldng 9 Screen-7-Jun 10 2025 10_41am-DpB9.jpg',
      '/images/projects/Ridgeview/Bldng 8-2-Jun 10 2025 10_40am-iS4Q.jpg',
      '/images/projects/Ridgeview/Bldng 8-6-Jun 10 2025 10_41am-azbS.jpg',
      '/images/projects/Ridgeview/Bldng 8-8-Jun 10 2025 10_41am-nDqg.jpg',
      '/images/projects/Ridgeview/Bldng 8-9-Jun 10 2025 10_41am-zPdg.jpg',
      '/images/projects/Ridgeview/Bldng 12 Screen-10-Jun 10 2025 10_45am-X55Q.jpg',
      '/images/projects/Ridgeview/Bldng 12 Screen-11-Jun 10 2025 10_45am-Pjqj.jpg',
      '/images/projects/Ridgeview/Bldng 12 Screen-12-Jun 10 2025 10_45am-AbdC.jpg',
      '/images/projects/Ridgeview/Bldng 12 Screen-13-Jun 10 2025 10_45am-hUad.jpg',
    ]
  },
  {
    id: 'olayan-residence',
    title: 'Olayan Residence',
    productLine: 'Windows, Mirrors & Shower Glass',
    description: [
      'A residential project with window, mirror, and shower glass scopes installed with the same finish standard as our commercial work.',
    ],
    coverImage: '/images/projects/olayan res/1-Apr 24 2026 01_02pm-JGim.jpg',
    images: [
      '/images/projects/olayan res/1-Apr 24 2026 01_02pm-JGim.jpg',
      '/images/projects/olayan res/2-Apr 24 2026 01_03pm-77h2.jpg',
      '/images/projects/olayan res/3-Apr 24 2026 01_03pm-P8zc.jpg',
      '/images/projects/olayan res/4-Apr 24 2026 01_03pm-EvVD.jpg',
      '/images/projects/olayan res/5-Apr 24 2026 01_04pm-9bb8.jpg',
      '/images/projects/olayan res/6-Apr 24 2026 01_04pm-r7xv.jpg',
      '/images/projects/olayan res/7-Apr 24 2026 01_04pm-CiEV.jpg',
      '/images/projects/olayan res/8-Apr 24 2026 01_05pm-kKhJ.jpg',
      '/images/projects/olayan res/9-Apr 24 2026 01_05pm-9ejR.jpg',
      '/images/projects/olayan res/10-Apr 24 2026 01_05pm-h6uc.jpg',
    ]
  },
  {
    id: 'edison',
    title: 'Edison',
    productLine: 'Windows & Glass Installation',
    description: [
      'Window and glass installation for a commercial new construction project, delivered on schedule with careful coordination around other trades on site.',
    ],
    coverImage: '/images/projects/edison/93e2a4e2-fa39-42ef-b376-23826e69e084.jpg',
    images: [
      '/images/projects/edison/93e2a4e2-fa39-42ef-b376-23826e69e084.jpg',
      '/images/projects/edison/f254c555-1c80-4941-9539-6d073ce74c24.jpg',
    ]
  }
];
