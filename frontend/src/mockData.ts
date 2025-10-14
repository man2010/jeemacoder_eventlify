import type { Job, TimeOfDay, Weekday } from './types';

function createTimeslot(
  id: string,
  date: string,
  startTime: string,
  endTime: string,
  timeOfDay: TimeOfDay,
  weekday: Weekday
) {
  return { id, date, startTime, endTime, timeOfDay, weekday };
}

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Nounou ponctuelle',
    category: 'Nounou',
    employerName: 'Famille Ndiaye',
    city: 'Dakar',
    neighborhood: 'Mermoz',
    description:
      "Garde d'enfants pour une soirée. Expérience appréciée, être ponctuel et patient.",
    payPerHourXof: 2000,
    currency: 'XOF',
    requirements: ['Expérience avec enfants', 'Disponible le soir'],
    timeslots: [
      createTimeslot('ts-1', '2025-10-16', '18:00', '22:00', 'Soir', 'Jeudi'),
      createTimeslot('ts-2', '2025-10-17', '18:00', '23:00', 'Soir', 'Vendredi')
    ]
  },
  {
    id: 'job-2',
    title: 'Serveur·se événementiel',
    category: 'Restauration',
    employerName: 'Traiteur Baobab',
    city: 'Thiès',
    description:
      'Service en salle pour un mariage. Bonne présentation, savoir porter un plateau.',
    payPerHourXof: 1800,
    currency: 'XOF',
    requirements: ['Chaussures fermées', 'Bonne présentation'],
    timeslots: [
      createTimeslot('ts-3', '2025-10-18', '10:00', '16:00', 'Matin', 'Samedi'),
      createTimeslot('ts-4', '2025-10-19', '12:00', '18:00', 'Après-midi', 'Dimanche')
    ]
  },
  {
    id: 'job-3',
    title: 'Ménage Airbnb',
    category: 'Ménage',
    employerName: 'Host Teranga',
    city: 'Dakar',
    neighborhood: 'Plateau',
    description: 'Nettoyage d\'un appartement entre deux locations. Matériel fourni.',
    payPerHourXof: 1500,
    currency: 'XOF',
    timeslots: [
      createTimeslot('ts-5', '2025-10-15', '08:00', '12:00', 'Matin', 'Mercredi'),
      createTimeslot('ts-6', '2025-10-16', '14:00', '18:00', 'Après-midi', 'Jeudi')
    ]
  },
  {
    id: 'job-4',
    title: 'Cours de maths - 2nde',
    category: 'Cours',
    employerName: 'Association Réussite',
    city: 'Saint-Louis',
    description: 'Soutien scolaire, patience et pédagogie requises.',
    payPerHourXof: 2500,
    currency: 'XOF',
    requirements: ['Bac scientifique souhaité'],
    timeslots: [
      createTimeslot('ts-7', '2025-10-20', '16:00', '18:00', 'Après-midi', 'Lundi'),
      createTimeslot('ts-8', '2025-10-22', '16:00', '18:00', 'Après-midi', 'Mercredi')
    ]
  },
  {
    id: 'job-5',
    title: 'Réceptionniste hôtel (nuit)',
    category: 'Réception',
    employerName: 'Hotel Océan',
    city: 'Mbour',
    description: 'Accueil clients et surveillance. Sérieux indispensable.',
    payPerHourXof: 2200,
    currency: 'XOF',
    timeslots: [
      createTimeslot('ts-9', '2025-10-21', '22:00', '06:00', 'Nuit', 'Mardi'),
      createTimeslot('ts-10', '2025-10-23', '22:00', '06:00', 'Nuit', 'Jeudi')
    ]
  },
  {
    id: 'job-6',
    title: 'Livraison repas midi',
    category: 'Livraison',
    employerName: 'FastYassa',
    city: 'Pikine',
    description: 'Livraison de repas à vélo ou scooter. Smartphone nécessaire.',
    payPerHourXof: 1700,
    currency: 'XOF',
    requirements: ['Vélo ou scooter', 'Smartphone'],
    timeslots: [
      createTimeslot('ts-11', '2025-10-17', '11:30', '14:30', 'Matin', 'Vendredi'),
      createTimeslot('ts-12', '2025-10-18', '11:30', '14:30', 'Matin', 'Samedi')
    ]
  }
];
