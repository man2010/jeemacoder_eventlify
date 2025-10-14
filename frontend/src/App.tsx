import { useMemo, useState } from 'react';
import './index.css';
import type { Filters, Job, Timeslot } from './types';
import { jobs as MOCK_JOBS } from './mockData';
import { FiltersBar } from './components/Filters';
import { JobCard } from './components/JobCard';
import { ApplyModal } from './components/ApplyModal';
import { Toast } from './components/Toast';
import { saveApplication } from './storage';

function App() {
  const [filters, setFilters] = useState<Filters>({
    query: '',
    category: 'Toutes' as any,
    city: 'Toutes' as any,
    timeOfDay: new Set(),
    weekdays: new Set(),
    minPayXof: 0
  });

  const [selection, setSelection] = useState<{
    job: Job | null;
    timeslot: Timeslot | null;
  }>({ job: null, timeslot: null });

  const [toast, setToast] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return MOCK_JOBS.filter((j) => {
      if (filters.category !== 'Toutes' && j.category !== filters.category) return false;
      if (filters.city !== 'Toutes' && j.city !== filters.city) return false;
      if (filters.minPayXof > 0 && j.payPerHourXof < filters.minPayXof) return false;
      if (q) {
        const hay = `${j.title} ${j.description} ${j.category} ${j.employerName}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.timeOfDay.size > 0) {
        const has = j.timeslots.some((t) => filters.timeOfDay.has(t.timeOfDay));
        if (!has) return false;
      }
      if (filters.weekdays.size > 0) {
        const has = j.timeslots.some((t) => filters.weekdays.has(t.weekday));
        if (!has) return false;
      }
      return true;
    });
  }, [filters]);

  const onSelectTimeslot = (job: Job, timeslot: Timeslot) => {
    setSelection({ job, timeslot });
  };

  const onConfirmApply = () => {
    if (!selection.job || !selection.timeslot) return;
    saveApplication({
      jobId: selection.job.id,
      timeslotId: selection.timeslot.id,
      appliedAt: new Date().toISOString()
    });
    setSelection({ job: null, timeslot: null });
    setToast('Candidature envoyée !');
  };

  return (
    <div>
      <div className="app-title">
        <span className="brand">Tëranga Jobs Étudiants</span>
        <span className="subtitle">Petits boulots flexibles au Sénégal</span>
      </div>

      <div className="filters">
        <FiltersBar filters={filters} onChange={setFilters} />
      </div>

      <div className="grid">
        <div className="content">
          {filtered.length === 0 ? (
            <div className="empty">Aucune offre ne correspond à vos filtres.</div>
          ) : (
            filtered.map((job) => (
              <JobCard key={job.id} job={job} onSelectTimeslot={onSelectTimeslot} />
            ))
          )}
        </div>
      </div>

      <ApplyModal
        open={!!selection.job}
        job={selection.job}
        timeslot={selection.timeslot}
        onConfirm={onConfirmApply}
        onClose={() => setSelection({ job: null, timeslot: null })}
      />
      <Toast message={toast} onHide={() => setToast(null)} />
    </div>
  );
}

export default App;
