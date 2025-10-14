export type JobCategory =
  | 'Nounou'
  | 'Restauration'
  | 'Ménage'
  | 'Cours'
  | 'Réception'
  | 'Livraison';

export type TimeOfDay = 'Matin' | 'Après-midi' | 'Soir' | 'Nuit';

export type Weekday =
  | 'Lundi'
  | 'Mardi'
  | 'Mercredi'
  | 'Jeudi'
  | 'Vendredi'
  | 'Samedi'
  | 'Dimanche';

export interface Timeslot {
  id: string;
  date: string; // ISO date (YYYY-MM-DD)
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  timeOfDay: TimeOfDay;
  weekday: Weekday;
}

export interface Job {
  id: string;
  title: string;
  category: JobCategory;
  employerName: string;
  city: string; // Ville/Commune
  neighborhood?: string; // Quartier
  description: string;
  payPerHourXof: number;
  currency: 'XOF';
  requirements?: string[];
  timeslots: Timeslot[];
}

export interface ApplicationRecord {
  jobId: string;
  timeslotId: string;
  appliedAt: string; // ISO datetime
}

export interface Filters {
  query: string;
  category: JobCategory | 'Toutes';
  city: string | 'Toutes';
  timeOfDay: Set<TimeOfDay>;
  weekdays: Set<Weekday>;
  minPayXof: number;
}

export const SENEGAL_CITIES: string[] = [
  'Dakar',
  'Pikine',
  'Guédiawaye',
  'Rufisque',
  'Thiès',
  'Saint-Louis',
  'Kaolack',
  'Ziguinchor',
  'Mbour'
];

export const JOB_CATEGORIES: JobCategory[] = [
  'Nounou',
  'Restauration',
  'Ménage',
  'Cours',
  'Réception',
  'Livraison'
];

export const WEEKDAYS: Weekday[] = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche'
];

export const TIMES_OF_DAY: TimeOfDay[] = ['Matin', 'Après-midi', 'Soir', 'Nuit'];
