import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components/ui'
import { Header } from '@/layout/header'

import s from '@/components/ui/table/table.module.scss'

export function App() {
  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
      <div
        style={{
          margin: '100px auto',
          // height: '600px',
          width: '1010px',
          // padding: '200px',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell style={{ width: '30%' }}>Name</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Cards</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Last Update</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Created by</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>DeckName</TableCell>
              <TableCell>8</TableCell>
              <TableCell>12.10.2023</TableCell>
              <TableCell>hellpains</TableCell>
              <TableCell className={s.actionsCell}>actions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>DeckName2</TableCell>
              <TableCell>0</TableCell>
              <TableCell>10.09.1999</TableCell>
              <TableCell>thefredressor</TableCell>
              <TableCell className={s.actionsCell}>actions</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
