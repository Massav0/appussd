export interface USSDCode {
  id: string;
  operator: string; // 'mtn', 'moov', or 'celtiis'
  title: string;
  code: string;
  description: string;
  category: string;
  cost?: string;
}

// MTN Benin USSD Codes
export const mtnCodes: USSDCode[] = [
  {
    id: 'mtn-1',
    operator: 'mtn',
    title: 'Consulter son solde',
    code: '*880#',
    description: 'Vérifier le solde de votre compte principal MTN.',
    category: 'Solde et Compte',
  },
  {
    id: 'mtn-2',
    operator: 'mtn',
    title: 'Menu principal',
    code: '*123#',
    description: 'Accéder au menu principal des services MTN.',
    category: 'Services Généraux',
  },
  {
    id: 'mtn-3',
    operator: 'mtn',
    title: 'Forfaits Internet',
    code: '*124#',
    description: 'Acheter des forfaits internet MTN (data).',
    category: 'Internet',
  },
  {
    id: 'mtn-4',
    operator: 'mtn',
    title: 'MTN Mobile Money',
    code: '*165#',
    description: 'Accéder aux services MTN Mobile Money.',
    category: 'Mobile Money',
  },
  {
    id: 'mtn-5',
    operator: 'mtn',
    title: 'Transfert de crédit',
    code: '*133*numero*montant#',
    description: 'Transférer du crédit à un autre numéro MTN.',
    category: 'Transfert et Recharge',
    cost: '50 FCFA par transfert',
  },
  {
    id: 'mtn-6',
    operator: 'mtn',
    title: 'Forfait Appel & SMS',
    code: '*125#',
    description: 'Souscrire aux forfaits appels et SMS MTN.',
    category: 'Forfaits',
  },
  {
    id: 'mtn-7',
    operator: 'mtn',
    title: 'MTN TV',
    code: '*113#',
    description: 'Accéder aux services MTN TV.',
    category: 'Divertissement',
  },
  {
    id: 'mtn-8',
    operator: 'mtn',
    title: 'Activer Roaming',
    code: '*147#',
    description: 'Activer ou vérifier l\'état du service Roaming.',
    category: 'Services Internationaux',
  },
  {
    id: 'mtn-9',
    operator: 'mtn',
    title: 'Services à valeur ajoutée',
    code: '*155#',
    description: 'Gérer les abonnements aux services à valeur ajoutée.',
    category: 'Services Généraux',
  },
  {
    id: 'mtn-10',
    operator: 'mtn',
    title: 'Prêt de crédit MTN',
    code: '*140#',
    description: 'Demander un prêt de crédit en cas d\'urgence.',
    category: 'Prêt et Crédit',
    cost: 'Frais selon le montant',
  },
];

// Moov Africa Benin USSD Codes
export const moovCodes: USSDCode[] = [
  {
    id: 'moov-1',
    operator: 'moov',
    title: 'Consulter son solde',
    code: '*104#',
    description: 'Vérifier le solde de votre compte principal Moov.',
    category: 'Solde et Compte',
  },
  {
    id: 'moov-2',
    operator: 'moov',
    title: 'Menu principal',
    code: '*100#',
    description: 'Accéder au menu principal des services Moov Africa.',
    category: 'Services Généraux',
  },
  {
    id: 'moov-3',
    operator: 'moov',
    title: 'Forfaits Internet',
    code: '*123#',
    description: 'Acheter des forfaits internet Moov Africa (data).',
    category: 'Internet',
  },
  {
    id: 'moov-4',
    operator: 'moov',
    title: 'Moov Money',
    code: '*155#',
    description: 'Accéder aux services Moov Money.',
    category: 'Mobile Money',
  },
  {
    id: 'moov-5',
    operator: 'moov',
    title: 'Transfert de crédit',
    code: '*108*numero*montant#',
    description: 'Transférer du crédit à un autre numéro Moov Africa.',
    category: 'Transfert et Recharge',
    cost: '50 FCFA par transfert',
  },
  {
    id: 'moov-6',
    operator: 'moov',
    title: 'Forfait SORA',
    code: '*106#',
    description: 'Souscrire aux forfaits SORA (Appels + Internet + SMS).',
    category: 'Forfaits',
  },
  {
    id: 'moov-7',
    operator: 'moov',
    title: 'Forfait Social Media',
    code: '*123*7#',
    description: 'Activer des forfaits spécifiques pour les réseaux sociaux.',
    category: 'Internet',
  },
  {
    id: 'moov-8',
    operator: 'moov',
    title: 'Service Client',
    code: '160',
    description: 'Appeler le service client de Moov Africa.',
    category: 'Services Généraux',
  },
  {
    id: 'moov-9',
    operator: 'moov',
    title: 'Moov TV',
    code: '*300#',
    description: 'Accéder aux services Moov TV.',
    category: 'Divertissement',
  },
  {
    id: 'moov-10',
    operator: 'moov',
    title: 'Prêt de crédit SOS',
    code: '*108#',
    description: 'Demander un prêt de crédit en cas d\'urgence.',
    category: 'Prêt et Crédit',
    cost: 'Frais selon le montant',
  },
];

// Celtiis Benin USSD Codes
export const celtiisCodes: USSDCode[] = [
  {
    id: 'celtiis-1',
    operator: 'celtiis',
    title: 'Consulter son solde',
    code: '*222#',
    description: 'Vérifier le solde de votre compte principal Celtiis.',
    category: 'Solde et Compte',
  },
  {
    id: 'celtiis-2',
    operator: 'celtiis',
    title: 'Menu principal',
    code: '*130#',
    description: 'Accéder au menu principal des services Celtiis.',
    category: 'Services Généraux',
  },
  {
    id: 'celtiis-3',
    operator: 'celtiis',
    title: 'Forfaits Internet',
    code: '*133#',
    description: 'Acheter des forfaits internet Celtiis (data).',
    category: 'Internet',
  },
  {
    id: 'celtiis-4',
    operator: 'celtiis',
    title: 'Celtiis Money',
    code: '*880#',
    description: 'Accéder aux services Celtiis Money.',
    category: 'Mobile Money',
  },
  {
    id: 'celtiis-5',
    operator: 'celtiis',
    title: 'Transfert de crédit',
    code: '*132*numero*montant#',
    description: 'Transférer du crédit à un autre numéro Celtiis.',
    category: 'Transfert et Recharge',
    cost: '50 FCFA par transfert',
  },
  {
    id: 'celtiis-6',
    operator: 'celtiis',
    title: 'Forfait Appel & SMS',
    code: '*131#',
    description: 'Souscrire aux forfaits appels et SMS Celtiis.',
    category: 'Forfaits',
  },
  {
    id: 'celtiis-7',
    operator: 'celtiis',
    title: 'Service Client',
    code: '121',
    description: 'Appeler le service client Celtiis.',
    category: 'Services Généraux',
  },
  {
    id: 'celtiis-8',
    operator: 'celtiis',
    title: 'Prêt de crédit',
    code: '*141#',
    description: 'Demander un prêt de crédit en cas d\'urgence.',
    category: 'Prêt et Crédit',
    cost: 'Frais selon le montant',
  },
];

// Function to get all codes
export const getAllCodes = (): USSDCode[] => {
  return [...mtnCodes, ...moovCodes, ...celtiisCodes];
};

// Function to get codes by operator
export const getCodesByOperator = (operator: string): USSDCode[] => {
  switch (operator) {
    case 'mtn':
      return mtnCodes;
    case 'moov':
      return moovCodes;
    case 'celtiis':
      return celtiisCodes;
    default:
      return [];
  }
};