import type { ApplicationRecord } from './types';

const STORAGE_KEY = 'gig_senegal_applications_v1';

export function loadApplications(): ApplicationRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as ApplicationRecord[];
  } catch {
    return [];
  }
}

export function saveApplication(record: ApplicationRecord): void {
  const all = loadApplications();
  const exists = all.some(
    (r) => r.jobId === record.jobId && r.timeslotId === record.timeslotId
  );
  const next = exists ? all : [...all, record];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
