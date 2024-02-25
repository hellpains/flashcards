import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={6}
    ref={ref}
    width={11}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M10.03 4.68a.67.67 0 0 1-1.1.5L5.36 2.2 1.78 5.08a.67.67 0 0 1-.94-.1.67.67 0 0 1 .1-.97l4-3.22a.67.67 0 0 1 .85 0l4 3.33a.67.67 0 0 1 .24.56Z'
      }
      fill={'#FFFEFE'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
