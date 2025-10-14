import { useEffect } from 'react';
import type { Job, Timeslot } from '../types';

interface Props {
  open: boolean;
  job: Job | null;
  timeslot: Timeslot | null;
  onConfirm: () => void;
  onClose: () => void;
}

export function ApplyModal({ open, job, timeslot, onConfirm, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open || !job || !timeslot) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h3>Confirmer la candidature</h3>
        <p>
          Vous allez postuler pour <strong>{job.title}</strong> chez {job.employerName}
          ,
          <br />
          le {timeslot.weekday} {timeslot.date} de {timeslot.startTime} à {timeslot.endTime}.
        </p>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Annuler</button>
          <button className="btn-primary" onClick={onConfirm}>Confirmer</button>
        </div>
      </div>
    </div>
  );
}
