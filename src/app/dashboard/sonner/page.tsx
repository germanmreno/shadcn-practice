'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Page() {
  return (
    <div>
      <Button
        variant='outline'
        onClick={() => toast.success('Event has been created')}
      >
        Show Toast
      </Button>
    </div>
  );
}
