'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactCTA.module.css';

interface FormData {
  name: string;
  organization: string;
  contact: string;
}

interface ContactFormProps {
  variant?: 'dark' | 'light';
}

export default function ContactForm({ variant = 'dark' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    contact: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Falha no envio');

      setStatus('success');
      setFormData({ name: '', organization: '', contact: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form
      className={`${styles.form} ${variant === 'light' ? styles.formLight : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange('name')}
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Município / Instituição"
        value={formData.organization}
        onChange={handleChange('organization')}
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Telefone ou e-mail"
        value={formData.contact}
        onChange={handleChange('contact')}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando...' : 'Falar com o IGOV'}
      </button>

      {status === 'success' && (
        <p className={styles.feedbackSuccess}>Mensagem enviada! Em breve entraremos em contato.</p>
      )}
      {status === 'error' && (
        <p className={styles.feedbackError}>Algo deu errado. Tente novamente.</p>
      )}
    </form>
  );
}