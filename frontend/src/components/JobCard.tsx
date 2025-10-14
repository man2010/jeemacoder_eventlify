import type { Job, Timeslot } from '../types';

interface Props {
  job: Job;
  onSelectTimeslot: (job: Job, timeslot: Timeslot) => void;
}

export function JobCard({ job, onSelectTimeslot }: Props) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.title}</h3>
        <span className="badge">{job.category}</span>
      </div>
      <p className="muted">
        {job.employerName} • {job.city}
        {job.neighborhood ? `, ${job.neighborhood}` : ''}
      </p>
      <p>{job.description}</p>
      {job.requirements && job.requirements.length > 0 && (
        <ul className="reqs">
          {job.requirements.map((r) => (
            <li key={r}>• {r}</li>
          ))}
        </ul>
      )}
      <div className="pay">{job.payPerHourXof.toLocaleString()} XOF/h</div>

      <div className="timeslots">
        {job.timeslots.map((t) => (
          <button
            key={t.id}
            className="timeslot"
            onClick={() => onSelectTimeslot(job, t)}
            aria-label={`Choisir ${t.date} ${t.startTime}-${t.endTime}`}
          >
            <span className="weekday">{t.weekday}</span>
            <span>{t.date}</span>
            <span>
              {t.startTime}–{t.endTime}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
