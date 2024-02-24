import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={36}
    ref={ref}
    version={'1.1'}
    viewBox={'0 0 200 200'}
    width={36}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M 63.200 13.200 C 62.371 14.029, 62 19.133, 62 29.700 L 62 45 49.934 45 C 43.298 45, 36.998 45.466, 35.934 46.035 C 34.050 47.043, 34 48.879, 34 116.335 C 34 168.874, 34.290 185.890, 35.200 186.800 C 36.929 188.529, 135.071 188.529, 136.800 186.800 C 137.629 185.971, 138 180.867, 138 170.300 L 138 155 150.066 155 C 156.702 155, 163.002 154.534, 164.066 153.965 C 165.950 152.957, 166 151.121, 166 83.665 C 166 31.126, 165.710 14.110, 164.800 13.200 C 163.071 11.471, 64.929 11.471, 63.200 13.200 M 42 116.500 L 42 180 86 180 L 130 180 130 116.500 L 130 53 86 53 L 42 53 42 116.500'
      }
      fill={'#8C61FF'}
      fillRule={'evenodd'}
      stroke={'none'}
    ></path>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
