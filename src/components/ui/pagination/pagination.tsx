import { ArrowIosUp } from '@/assets/icons'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { Button, Typography } from '..'
import { Select } from '../select'
import { DOTS, usePagination } from './usePagination'

type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  pageSize: number
  setPageSize: (value: any) => void
  totalPage: number
}
export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  setPageSize,
  totalPage,
}: PaginationProps) => {
  const { paginationRange } = usePagination({
    count: totalPage,
    onChange: onPageChange,
    page: currentPage,
  })

  const nextDisabled = currentPage === totalPage
  const previousDisabled = currentPage === 1
  const onNext = () => {
    !nextDisabled && onPageChange((currentPage += 1))
  }

  const onPrevious = () => {
    !previousDisabled && onPageChange((currentPage -= 1))
  }

  return (
    <div className={s.container}>
      <div className={s.pagination}>
        <Button
          className={`${s.arrow} ${s.left} ${previousDisabled && s.iconDisabled}`}
          onClick={onPrevious}
        >
          <ArrowIosUp />
        </Button>

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <div className={s.paginationItemDots} key={index}>
                {DOTS}
              </div>
            )
          }

          return (
            <div
              className={clsx(
                s.paginationItem,
                pageNumber === currentPage ? s.activePaginationItem : ''
              )}
              key={index}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </div>
          )
        })}
        <Button
          className={`${s.arrow} ${s.right} ${nextDisabled && s.iconDisabled}`}
          onClick={onNext}
        >
          <ArrowIosUp />
        </Button>
      </div>

      <div className={s.limits}>
        <Typography as={'div'} variant={'body2'}>
          Показать
        </Typography>
        <div>
          <Select onValueChange={setPageSize} options={options} value={String(pageSize)} />
        </div>
        <Typography as={'div'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
const options = [
  { title: '5', value: 5 },
  { title: '7', value: 7 },
  { title: '10', value: 10 },
  { title: '30', value: 30 },
  { title: '50', value: 50 },
]
