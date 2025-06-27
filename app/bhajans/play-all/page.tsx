// app/bhajans/play-all/page.tsx
'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

/* -------------------------------------------------------------------- */
/*  1)  Grab the ready-made “tracks” arrays from every CD display file   */
/*      (make sure every CD?.tsx exports `tracks` exactly like CD1)     */
/* -------------------------------------------------------------------- */
import { tracks as cd1 } from '@/components/CD1Display';
import { tracks as cd2 } from '@/components/CD2Display';
import { tracks as cd3 } from '@/components/CD3Display';
import { tracks as cd4 } from '@/components/CD4Display';
import { tracks as cd5 } from '@/components/CD5Display';
import { tracks as cd6 } from '@/components/CD6Display';

/** A single flattened playlist ― 90 bhajans in album order */
const playlist = [...cd1, ...cd2, ...cd3, ...cd4, ...cd5, ...cd6];

/* ==================================================================== */
export default function PlayAllBhajans() {
  const audioRef   = useRef<HTMLAudioElement | null>(null);
  const [trackIdx, setTrackIdx] = useState(0);

  /* ---------- jump to the next bhajan ---------- */
  const next = useCallback(() => {
    setTrackIdx(i => (i + 1 < playlist.length ? i + 1 : 0));   // loop back to 0
  }, []);

  /* play automatically whenever trackIdx changes */
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.load();      // refresh <source>
    // play() returns a Promise; ignore failure if user hasn’t interacted yet
    el.play().catch(() => {});
  }, [trackIdx]);

  /* attach once: advance when a bhajan ends */
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.addEventListener('ended', next);
    return () => el.removeEventListener('ended', next);
  }, [next]);

  const { title, file } = playlist[trackIdx];

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <h1 className="text-center text-4xl font-extrabold text-brand-700">
        Play&nbsp;All&nbsp;Bhajans
      </h1>
      <p className="text-center text-gray-600">
        Streaming every Sai Subhanjali track – CD&nbsp;1&nbsp;→&nbsp;CD&nbsp;6.
      </p>

      {/* --- CURRENT TRACK --- */}
      <section className="space-y-4 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-purple-700">{title}</h2>

        <audio ref={audioRef} controls className="w-full">
          <source src={file} type="audio/mpeg" />
          Your browser does not support HTML&nbsp;audio.
        </audio>

        <button
          onClick={next}
          className="rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          Skip&nbsp;▶
        </button>
      </section>

      {/* --- QUEUE (optional visual list) --- */}
      <ul className="space-y-1 text-sm text-gray-600">
        {playlist.map((t, i) => (
          <li key={i} className={i === trackIdx ? 'font-semibold text-purple-700' : ''}>
            {i + 1}. {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
