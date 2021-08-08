import { FunctionalComponent, h } from "preact"
import { useEffect, useState } from "preact/hooks"
import style from "./style.css"

const Header: FunctionalComponent = () => {
  const [location, setLocation] = useState("")

  useEffect(() => {
    const src = new URL(document.location.toString()).searchParams
    const href = src.get("full") || ""
    setLocation(href)
  }, [])

  return (
    <header class={style.header}>
      {location ? (
        <a href={location} class={style.btn}>
          Beli Versi Full
        </a>
      ) : (
        <h1>Preview Book</h1>
      )}
    </header>
  )
}

export default Header
