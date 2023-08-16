import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import { ListFilter } from "lucide-react"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" className="placeholder:text-black text-black" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          <SelectItem value="unpaid" className="bg-red-400">Unpaid</SelectItem>
          <SelectItem value="pending" className="bg-yellow-200">Pending</SelectItem>
          <SelectItem value="paid" className="bg-green-300">Paid</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
