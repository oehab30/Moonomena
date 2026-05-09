'use client';

import * as React from 'react';

type ErrorWithDigest = Error & { digest?: string };

export default function ErrorPage({
  error,
  reset,
}: {
  error: ErrorWithDigest;
  reset: () => void;
}) {
  const [copied, setCopied] = React.useState(false);
  const [reporting, setReporting] = React.useState(false);

  const details = React.useMemo(() => {
    const name = error?.name ?? 'Error';
    const message = error?.message ?? 'Unknown error';
    const digest = error?.digest ? `\nDigest: ${error.digest}` : '';
    const stack = error?.stack ? `\n\nStack:\n${error.stack}` : '';
    return `${name}: ${message}${digest}${stack}`;
  }, [error]);

  React.useEffect(() => {
    // Client-side logging (works in production too)
    // In real apps, send to Sentry/Datadog/etc.
    console.error('Route Error Boundary caught:', error);
  }, [error]);

  async function copyDetails() {
    try {
      await navigator.clipboard.writeText(details);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Clipboard can fail in some browsers/contexts
      setCopied(false);
    }
  }

  async function reportIssue() {
    setReporting(true);
    try {
      // OPTIONAL: Implement an API route to receive this
      // Example endpoint: /api/report-error
      await fetch('/api/report-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error?.message,
          name: error?.name,
          digest: error?.digest,
          stack: error?.stack,
          url: typeof window !== 'undefined' ? window.location.href : undefined,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
          time: new Date().toISOString(),
        }),
      });
    } catch (e) {
      console.warn('Failed to report error:', e);
    } finally {
      setReporting(false);
    }
  }

  return (
    <main style={styles.page}>
      <section style={styles.card} aria-labelledby="error-title">
        <div style={styles.header}>
          <div style={styles.badge} aria-hidden="true">
            !
          </div>
          <div>
            <h1 id="error-title" style={styles.title}>
              Something went wrong
            </h1>
            <p style={styles.subtitle}>
              You can try again, or copy the details to share with support.
            </p>
          </div>
        </div>

        <div style={styles.messageBox}>
          <p style={styles.errorName}>{error?.name ?? 'Error'}</p>
          <p style={styles.errorMessage}>{error?.message ?? 'Unknown error occurred.'}</p>
          {error?.digest ? (
            <p style={styles.digest}>
              Digest: <code>{error.digest}</code>
            </p>
          ) : null}
        </div>

        <details style={styles.details}>
          <summary style={styles.summary}>Technical details</summary>
          <pre style={styles.pre}>{details}</pre>
        </details>

        <div style={styles.actions}>
          <button type="button" onClick={() => reset()} style={styles.primaryBtn}>
            Try again
          </button>

          <button type="button" onClick={copyDetails} style={styles.secondaryBtn}>
            {copied ? 'Copied!' : 'Copy details'}
          </button>

          <button
            type="button"
            onClick={reportIssue}
            style={styles.ghostBtn}
            disabled={reporting}
            aria-disabled={reporting}
          >
            {reporting ? 'Reporting…' : 'Report issue'}
          </button>

          <a href="/" style={styles.linkBtn}>
            Go home
          </a>
        </div>

        <p style={styles.footerNote}>
          If this keeps happening, please include the copied details (and digest if shown).
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '70vh',
    display: 'grid',
    placeItems: 'center',
    padding: 24,
  },
  card: {
    width: 'min(760px, 100%)',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: 16,
    padding: 20,
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  header: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 999,
    display: 'grid',
    placeItems: 'center',
    fontWeight: 800,
    border: '1px solid rgba(0,0,0,0.18)',
  },
  title: {
    fontSize: 22,
    margin: 0,
  },
  subtitle: {
    margin: '6px 0 0 0',
    opacity: 0.75,
    lineHeight: 1.4,
  },
  messageBox: {
    borderRadius: 12,
    padding: 14,
    border: '1px solid rgba(0,0,0,0.12)',
    marginTop: 10,
  },
  errorName: {
    margin: 0,
    fontWeight: 700,
  },
  errorMessage: {
    margin: '6px 0 0 0',
    opacity: 0.85,
  },
  digest: {
    margin: '8px 0 0 0',
    opacity: 0.75,
  },
  details: {
    marginTop: 14,
  },
  summary: {
    cursor: 'pointer',
    fontWeight: 600,
    opacity: 0.85,
  },
  pre: {
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    border: '1px solid rgba(0,0,0,0.12)',
    overflowX: 'auto',
    fontSize: 12,
    lineHeight: 1.35,
    opacity: 0.9,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
    alignItems: 'center',
  },
  primaryBtn: {
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.2)',
    fontWeight: 700,
    cursor: 'pointer',
  },
  secondaryBtn: {
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.2)',
    cursor: 'pointer',
    opacity: 0.9,
  },
  ghostBtn: {
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px dashed rgba(0,0,0,0.25)',
    cursor: 'pointer',
    opacity: 0.9,
  },
  linkBtn: {
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px solid rgba(0,0,0,0.2)',
    textDecoration: 'none',
    display: 'inline-block',
    opacity: 0.9,
  },
  footerNote: {
    marginTop: 14,
    opacity: 0.7,
    fontSize: 13,
    lineHeight: 1.4,
  },
};
