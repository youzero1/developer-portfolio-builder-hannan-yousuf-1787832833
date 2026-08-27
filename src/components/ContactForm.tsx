import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

interface Fields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: '', email: '', subject: '', message: '' };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = 'Please tell me your name.';
  if (!fields.email.trim()) {
    errors.email = 'An email address is required so I can reply.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = 'That email address does not look right.';
  }
  if (!fields.subject.trim()) errors.subject = 'Add a short subject.';
  if (fields.message.trim().length < 20) {
    errors.message = 'Please write at least 20 characters so I have some context.';
  }
  return errors;
}

const inputBase =
  'w-full rounded-lg border bg-[#0a0c10]/80 px-3.5 py-2.5 font-mono text-[13px] text-slate-200 placeholder:text-muted/60 transition-colors focus:outline-none';

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      // Ready to be connected to an email service or database later.
      console.info('Contact message captured:', fields);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/[0.07] p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-white">Message received</h3>
        <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-muted">
          Thanks {fields.name.split(' ')[0] || 'there'} — I usually reply within a working day.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => {
            setFields(empty);
            setErrors({});
            setStatus('idle');
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface/70 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="name"
          value={fields.name}
          error={errors.name}
          placeholder="Jane Doe"
          onChange={(value) => update('name', value)}
        />
        <Field
          id="email"
          label="email"
          type="email"
          value={fields.email}
          error={errors.email}
          placeholder="jane@company.com"
          onChange={(value) => update('email', value)}
        />
      </div>

      <div className="mt-4">
        <Field
          id="subject"
          label="subject"
          value={fields.subject}
          error={errors.subject}
          placeholder="Freelance project — dashboard rebuild"
          onChange={(value) => update('subject', value)}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] text-accent2">
          message
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          placeholder="A little about the project, timeline, and what you need help with…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onChange={(event) => update('message', event.target.value)}
          className={cn(
            inputBase,
            'resize-y',
            errors.message ? 'border-red-500/70' : 'border-line focus:border-accent/60',
          )}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 font-mono text-[11px] text-red-400">
            {errors.message}
          </p>
        ) : (
          <p className="mt-1.5 font-mono text-[11px] text-muted/70">
            {fields.message.trim().length} characters
          </p>
        )}
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-3.5 py-2.5 font-mono text-[12px] text-red-300">
          Something went wrong sending that. Please try again.
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink/40 border-t-ink" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Icon name="arrow-right" className="h-4 w-4" />
            </>
          )}
        </Button>
        <p className="font-mono text-[11px] text-muted">I reply to every genuine enquiry.</p>
      </div>
    </form>
  );
}

interface FieldProps {
  id: keyof Fields;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
}

function Field({ id, label, value, error, placeholder, type = 'text', onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-[11px] text-accent2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          inputBase,
          error ? 'border-red-500/70' : 'border-line focus:border-accent/60',
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-mono text-[11px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
