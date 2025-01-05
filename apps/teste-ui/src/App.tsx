import { Button } from "@nebula/react";

export function App() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Button size="sm">Default sm</Button>
      <Button>Default md</Button>
      <Button size="lg">Default lg</Button>
      <Button variant="ghost" size="sm">Ghost sm</Button>
      <Button variant="ghost">Ghost md</Button>
      <Button variant="ghost" size="lg">Ghost lg</Button>
      <Button variant="outline" size="sm">Outline sm</Button>
      <Button variant="outline">Outline md</Button>
      <Button variant="outline" size="lg">Outline lg</Button>
    </div>
  )
}
