export interface BlogCategory {
  id: number;
  name: {
    en: string;
    tr: string;
    az: string;
  };
}

export const blogCategories: BlogCategory[] = [
  {
    id: 1,
    name: {
      en: 'Orthopedics',
      tr: 'Ortopedi',
      az: 'Ortopediya'
    }
  },
  {
    id: 2,
    name: {
      en: 'Sports Medicine',
      tr: 'Spor Hekimliği',
      az: 'İdman Tibbi'
    }
  },
  {
    id: 3,
    name: {
      en: 'Pediatric Care',
      tr: 'Pediatrik Bakım',
      az: 'Pediatrik Qayğı'
    }
  },
  {
    id: 4,
    name: {
      en: 'Surgery',
      tr: 'Cerrahi',
      az: 'Cərrahiyyə'
    }
  },
  {
    id: 5,
    name: {
      en: 'Rehabilitation',
      tr: 'Rehabilitasyon',
      az: 'Reabilitasiya'
    }
  }
];