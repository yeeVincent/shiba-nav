"use client"

import { useParams, useSearchParams } from "next/navigation"
import { allShibas } from "@/.contentlayer/generated"
import ListLayout from "@/layout/ListLayout"
import ShibaLayout from "@/layout/ShibaLayout"

export default function Shiba() {
  const FirstShibaArticle = allShibas.at(0)
  const FirstShibaArticleName = FirstShibaArticle?.title || ""
  const articleName = useSearchParams().get("articleName") || FirstShibaArticleName

  return (
    <div className="flex flex-row justify-center px-5 ">
      <ListLayout className="md:min-w-60 mr-5" shibas={allShibas} title={"柴犬信息"}></ListLayout>
      <ShibaLayout className="" articleName={articleName}></ShibaLayout>
    </div>
  )
}
