import { useMemo } from 'react';
import type { Filters } from '../types';
import { JOB_CATEGORIES, SENEGAL_CITIES, TIMES_OF_DAY, WEEKDAYS } from '../types';

interface Props {
  filters: Filters;
  onChange: (next: Filters) => void;
}

export function FiltersBar({ filters, onChange }: Props) {
  const availableCategories = useMemo(
    () => ['Toutes', ...JOB_CATEGORIES] as const,
    []
  );
  const availableCities = useMemo(
    () => ['Toutes', ...SENEGAL_CITIES] as const,
    []
  );

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Rechercher un job (ex: nounou, ménage)"
        value={filters.query}
        onChange={(e) => onChange({ ...filters, query: e.target.value })}
      />

      <select
        value={filters.category}
        onChange={(e) =>
          onChange({ ...filters, category: e.target.value as any })
        }
      >
        {availableCategories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={filters.city}
        onChange={(e) => onChange({ ...filters, city: e.target.value as any })}
      >
        {availableCities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <fieldset className="chips">
        <legend>Moments de la journée</legend>
        {TIMES_OF_DAY.map((t) => (
          <label key={t} className={`chip ${filters.timeOfDay.has(t) ? 'on' : ''}`}>
            <input
              type="checkbox"
              checked={filters.timeOfDay.has(t)}
              onChange={(e) => {
                const next = new Set(filters.timeOfDay);
                if (e.target.checked) next.add(t);
                else next.delete(t);
                onChange({ ...filters, timeOfDay: next });
              }}
            />
            {t}
          </label>
        ))}
      </fieldset>

      <fieldset className="chips">
        <legend>Jours</legend>
        {WEEKDAYS.map((d) => (
          <label key={d} className={`chip ${filters.weekdays.has(d) ? 'on' : ''}`}>
            <input
              type="checkbox"
              checked={filters.weekdays.has(d)}
              onChange={(e) => {
                const next = new Set(filters.weekdays);
                if (e.target.checked) next.add(d);
                else next.delete(d);
                onChange({ ...filters, weekdays: next });
              }}
            />
            {d}
          </label>
        ))}
      </fieldset>

      <label className="min-pay">
        Min (XOF/h)
        <input
          type="number"
          min={0}
          step={100}
          value={filters.minPayXof}
          onChange={(e) =>
            onChange({ ...filters, minPayXof: Number(e.target.value || 0) })
          }
        />
      </label>
    </div>
  );
}
