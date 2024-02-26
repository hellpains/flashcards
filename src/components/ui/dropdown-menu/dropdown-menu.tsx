import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown-menu.module.scss'
//
// type DropdownMenuProps = {
//   variant?: 'cardInfo' | 'profileInfo'
// } & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Root>

// export const DropdownMenu = forwardRef<
//   ElementRef<typeof RadixDropdownMenu.Root>,
//   DropdownMenuProps
// >((props, ref) => {
//   const { children, variant = 'profileInfo', ...rest } = props
//
//   return (
//     <RadixDropdownMenu.Root {...rest}>
//       <RadixDropdownMenu.Trigger className={clsx(s.trigger)} ref={ref}>
//         {children}
//       </RadixDropdownMenu.Trigger>
//
//       <RadixDropdownMenu.Portal>
//         {variant === 'profileInfo' && (
//           <RadixDropdownMenu.Content
//             align={'end'}
//             alignOffset={-2}
//             className={clsx(s.content)}
//             sideOffset={11}
//           >
//             <div className={s.triangle}></div>
//             <RadixDropdownMenu.Item className={clsx(s.user)} disabled>
//               <div className={s.avatar}>
//                 <Avatar>
//                   <AvatarImage className={s.img} src={''} />
//                   <AvatarFallback>H</AvatarFallback>
//                 </Avatar>
//               </div>
//               <div className={s.userInfo}>
//                 <Typography as={'div'} className={s.nickname} variant={'subtitle2'}>
//                   hellpains
//                 </Typography>
//                 <Typography as={'div'} className={s.email} variant={'caption'}>
//                   rustam2004sadulaev@mail.ru
//                 </Typography>
//               </div>
//             </RadixDropdownMenu.Item>
//             <RadixDropdownMenu.Separator className={s.separator} />
//             <RadixDropdownMenu.Item className={clsx(s.item)}>
//               <Person /> My Profile
//             </RadixDropdownMenu.Item>
//             <RadixDropdownMenu.Separator className={s.separator} />
//             <RadixDropdownMenu.Item className={clsx(s.item)}>
//               <Logout /> Sign Out
//             </RadixDropdownMenu.Item>
//           </RadixDropdownMenu.Content>
//         )}
//
//         {variant === 'cardInfo' && (
//           <RadixDropdownMenu.Content
//             align={'end'}
//             alignOffset={-2}
//             className={clsx(s.content)}
//             sideOffset={11}
//           >
//             <div className={s.triangle}></div>
//             <RadixDropdownMenu.Item className={clsx(s.user)} disabled>
//               <div className={s.avatar}>
//                 <Avatar>
//                   <AvatarImage className={s.img} src={''} />
//                   <AvatarFallback>H</AvatarFallback>
//                 </Avatar>
//               </div>
//               <div className={s.userInfo}>
//                 <Typography as={'div'} className={s.nickname} variant={'subtitle2'}>
//                   hellpains
//                 </Typography>
//                 <Typography as={'div'} className={s.email} variant={'caption'}>
//                   rustam2004sadulaev@mail.ru
//                 </Typography>
//               </div>
//             </RadixDropdownMenu.Item>
//             <RadixDropdownMenu.Separator className={s.separator} />
//             <RadixDropdownMenu.Item className={clsx(s.item)}>
//               <Person /> My Profile
//             </RadixDropdownMenu.Item>
//             <RadixDropdownMenu.Separator className={s.separator} />
//             <RadixDropdownMenu.Item className={clsx(s.item)}>
//               <Logout /> Sign Out
//             </RadixDropdownMenu.Item>
//           </RadixDropdownMenu.Content>
//         )}
//       </RadixDropdownMenu.Portal>
//     </RadixDropdownMenu.Root>
//   )
// })

const DropdownMenu = RadixDropdownMenu.Root

const DropdownMenuTrigger = RadixDropdownMenu.Trigger

const DropdownMenuContent = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ alignOffset = 0, children, className, sideOffset = 14, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        align={'end'}
        alignOffset={alignOffset}
        className={clsx(s.content, className)}
        ref={ref}
        sideOffset={sideOffset}
        {...rest}
      >
        <RadixDropdownMenu.Arrow asChild>
          <div className={s.triangle} />
        </RadixDropdownMenu.Arrow>
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
})

DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName

const DropdownMenuItem = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>
>(({ className, ...rest }, ref) => {
  return <RadixDropdownMenu.Item className={clsx(s.item, className)} ref={ref} {...rest} />
})

DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Separator>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>
>(({ className, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Separator className={clsx(s.separator, className)} ref={ref} {...rest} />
  )
})

DropdownMenuSeparator.displayName = RadixDropdownMenu.Separator.displayName
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
