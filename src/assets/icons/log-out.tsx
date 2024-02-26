import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={16} ref={ref} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M4.67 4a.67.67 0 1 0 0-1.33H3.33a.67.67 0 0 0-.66.66v9.34a.67.67 0 0 0 .66.66h1.34a.67.67 0 1 0 0-1.33H4V4h.67Zm9.21 3.61L12 4.95a.67.67 0 1 0-1.09.77l1.15 1.61h-5.4a.67.67 0 0 0 0 1.34H12l-1.2 1.6a.67.67 0 0 0 .13.93.67.67 0 0 0 .94-.13l2-2.67a.67.67 0 0 0 .01-.79Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
