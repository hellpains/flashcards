import { useEffect, useMemo, useState } from 'react'

import { Header } from '@/layout/header'
import axios from 'axios'

import { Pagination } from './components/ui'

export function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<{ id: number }[]>([])
  const [pageSize, setPageSize] = useState(5)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * +pageSize
    const lastPageIndex = firstPageIndex + +pageSize

    return data?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
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
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
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
