import { DataTable } from '../../organisms';
import { Heading } from '../../atoms';
import Container from '@mui/material/Container';

export default function TableSection() {
  const columns = [
    {
      id: 'picture',
      numeric: false,
      label: 'Product',
      width: '3rem'
    },
    {
      id: 'title',
      numeric: false,
      label: 'Title'
    },
    {
      id: 'albumId',
      numeric: true,
      label: 'Ablum Id'
    }
  ];
  return (
    <Container>
      <Heading />
      <DataTable columns={columns} />
    </Container>
  );
}
