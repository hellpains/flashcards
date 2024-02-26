import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={16} ref={ref} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M8 7.33A2.67 2.67 0 1 0 8 2a2.67 2.67 0 0 0 0 5.33Zm0-4A1.33 1.33 0 1 1 8 6a1.33 1.33 0 0 1 0-2.67Zm0 5.34a4.67 4.67 0 0 0-4.67 4.66.67.67 0 1 0 1.34 0 3.33 3.33 0 0 1 6.66 0 .67.67 0 0 0 1.34 0A4.67 4.67 0 0 0 8 8.67Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
