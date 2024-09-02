import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <div className='flex gap-4'>
      <Badge>default</Badge>
      <Badge variant='destructive'>default</Badge>
      <Badge variant='secondary'>default</Badge>
      <Badge capitalize variant='info'>
        default
      </Badge>
      <Badge capitalize variant='success'>
        default
      </Badge>
    </div>
  );
}
