"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex justify-center items-center">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-white hover:text-amber-400 flex items-center">
            <Home size={16} />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={16} className="text-gray-400 mx-1" />
            {item.isCurrent ? (
              <span className="text-amber-400" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-white hover:text-amber-400">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
