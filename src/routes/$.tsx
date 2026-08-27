import { createFileRoute } from '@tanstack/react-router';
import { NotFound } from '@/routes/__root';

export const Route = createFileRoute('/$')({
  component: NotFound,
});
