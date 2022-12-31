import { useRouter } from 'next/router'
import React from 'react'

const [Slug] = () => {
    const router = useRouter()
    const Slug = router.query
  return (
    <div>[Slug]</div>
  )
}

export default [Slug]