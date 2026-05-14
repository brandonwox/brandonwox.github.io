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
  }
];
