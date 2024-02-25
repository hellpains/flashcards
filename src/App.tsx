import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'

export function App() {
  return (
    <div
      style={{
        backgroundColor: '#171717',
        height: '600px',
        margin: '100px',
        padding: '50px',
        width: '600px',
      }}
    >
      <Avatar>
        <AvatarImage />
        <AvatarFallback />
      </Avatar>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>H</AvatarFallback>
      </Avatar>
    </div>
  )
}
