import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={36}
    ref={ref}
    viewBox={'0 0 200 200'}
    width={36}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M63.2 13.2c-.83.83-1.2 5.93-1.2 16.5V45H49.93c-6.63 0-12.93.47-14 1.03-1.88 1.01-1.93 2.85-1.93 70.3 0 52.54.29 69.56 1.2 70.47 1.73 1.73 99.87 1.73 101.6 0 .83-.83 1.2-5.93 1.2-16.5V155h12.07c6.63 0 12.93-.47 14-1.03 1.88-1.01 1.93-2.85 1.93-70.3 0-52.54-.29-69.56-1.2-70.47-1.73-1.73-99.87-1.73-101.6 0M42 116.5V180h88V53H42v63.5'
      }
      fill={'#8C61FF'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
