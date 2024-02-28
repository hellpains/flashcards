import { useEffect, useMemo, useState } from 'react'

import { Header } from '@/layout/header'
import axios from 'axios'

import { Pagination } from './components/ui'

export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<{ comment: string; email: string; id: number; name: string }[]>(
    []
  )
  const [pageSize, setPageSize] = useState(5)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * +pageSize
    const lastPageIndex = firstPageIndex + +pageSize

    return data?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
      <div
        style={{
          height: '600px',
          margin: '100px',
          padding: '200px',
        }}
      >
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>COMMENT</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.comment}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            onPageChange={page => setCurrentPage(page)}
            pageSize={pageSize}
            setPageSize={setPageSize}
            totalPage={Math.ceil(data.length / pageSize)}
          />
        </>
      </div>
    </div>
  )
}
