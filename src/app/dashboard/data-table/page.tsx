import { payments } from '@/data/payments.data';
import { DataTable } from './data-table';
import { columns } from './columns';

async function fecthData() {
  return payments;
}

export default async function Page() {
  const data = await fecthData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
