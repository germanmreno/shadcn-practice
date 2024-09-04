'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';

export default function Page() {
  const { toast } = useToast();

  return (
    <div>
      <Button
        variant='outline'
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText='Try again'>Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}
