import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={16} ref={ref} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M14 4h-3.33V2.89A1.61 1.61 0 0 0 9 1.33H7A1.61 1.61 0 0 0 5.33 2.9V4H2a.67.67 0 0 0 0 1.33h.67v7.34a2 2 0 0 0 2 2h6.66a2 2 0 0 0 2-2V5.33H14A.67.67 0 1 0 14 4ZM6.67 2.89c0-.11.14-.22.33-.22h2c.2 0 .33.11.33.22V4H6.67V2.89ZM12 12.67a.67.67 0 0 1-.67.66H4.67a.67.67 0 0 1-.67-.66V5.33h8v7.34Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
