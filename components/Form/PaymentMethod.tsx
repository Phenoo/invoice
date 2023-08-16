"use client"
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

export function PaymentMethod({field}:any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-[250px] bg-white mt-2">
        <SelectValue placeholder="Select a payment method" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectGroup>
          <SelectLabel>Payment Status</SelectLabel>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="unpaid">Unpaid</SelectItem>
          <SelectItem value="paid">Paid</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
